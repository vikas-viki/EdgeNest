import { RunTaskCommand } from "@aws-sdk/client-ecs";
import { UserDataResponse } from "../lib/types";
import { project, user } from "../prisma-client";
import { NewDeploymentData, NewProjectData, PublicDeploymentData } from "./scheema";
import { clickhouseClient, db, ecsClient, redisClient, s3Client } from "../lib/clients";
import { generateSlug } from "random-word-slugs";
import {
    ListObjectsV2Command,
    CopyObjectCommand,
    DeleteObjectsCommand
} from "@aws-sdk/client-s3";
import { MAX_ECS_TASKS, S3_BUCKET } from "../lib/constants";

export class UserService {
    static config = {
        CLUSTER: 'arn:aws:ecs:ap-south-1:979188187252:cluster/edgenest-builder-cluster',
        TASK: 'arn:aws:ecs:ap-south-1:979188187252:task-definition/edgenest-builder-task',
        subnets: ["subnet-000459d6539048077", "subnet-0019f47cb9015c938", "subnet-0e9bea79e42c171ee"],
        securityGroups: ["sg-0022fbb54b8684052"]
    };

    static async newTask(data: { projectId: string, subdomain: string, gitUrl: string, outputFolder: string, repoBranch: string, deploymentId: string, envs: Record<string, string>[] }): Promise<boolean> {
        const count = await redisClient.incr("ECS_TASKS_COUNT");
        if (count == 1) {
            await redisClient.expire("ECS_TASKS_COUNT", 24 * 60 * 60);
        }
        if (count > MAX_ECS_TASKS) {
            return false;
        }
        const cmd = new RunTaskCommand({
            cluster: this.config.CLUSTER,
            taskDefinition: this.config.TASK,
            launchType: 'FARGATE',
            count: 1,
            networkConfiguration: {
                awsvpcConfiguration: {
                    subnets: this.config.subnets,
                    securityGroups: this.config.securityGroups,
                    assignPublicIp: 'ENABLED'
                }
            },
            overrides: {
                containerOverrides: [
                    {
                        name: 'edgenest-builder-image',
                        environment: [
                            {
                                name: 'PROJECT_ID',
                                value: data.projectId
                            },
                            {
                                name: 'SUB_DOMAIN',
                                value: data.subdomain
                            },
                            {
                                name: 'GIT_REPOSITORY_URL',
                                value: data.gitUrl
                            },
                            {
                                name: 'KAFKA_SERVICE_URL',
                                value: process.env.KAFKA_SERVICE_URL?.toString()
                            },
                            {
                                name: 'KAFKA_USERNAME',
                                value: process.env.KAFKA_USERNAME?.toString()
                            },
                            {
                                name: 'KAFKA_PASSWORD',
                                value: process.env.KAFKA_PASSWORD?.toString()
                            },
                            {
                                name: "CLICKHOUSE_URL",
                                value: process.env.CLICKHOUSE_URL?.toString()
                            },
                            {
                                name: "CLICKHOUSE_PASSWORD",
                                value: process.env.CLICKHOUSE_PASSWORD?.toString()
                            },
                            {
                                name: "BRANCH",
                                value: data.repoBranch
                            },
                            {
                                name: 'DEPLOYMENT_ID',
                                value: data.deploymentId
                            },
                            {
                                name: "OUTPUT_FOLDER",
                                value: data.outputFolder
                            },
                            ...data.envs
                        ]
                    }
                ]
            }
        });

        await ecsClient.send(cmd);
        return true;
    }

    static async deleteOldFolders(data: { oldDomain: string }): Promise<void> {
        try {
            const oldFolders = await s3Client.send(
                new ListObjectsV2Command({
                    Bucket: S3_BUCKET,
                    Prefix: `__outputs/${data.oldDomain}`
                })
            )
            if (!oldFolders.Contents || oldFolders.Contents.length == 0) {
                console.log("No contents found!");
                return;
            }

            await s3Client.send(
                new DeleteObjectsCommand({
                    Bucket: S3_BUCKET,
                    Delete: {
                        Objects: oldFolders.Contents.map((obj) => ({ Key: obj.Key! })),
                        Quiet: true
                    }
                })
            )
        } catch (e) {
            console.log("erorr deleteing old folders", e);
        }
    }

    static async updateSubdomain(data: { projectId: string, oldDomain: string, newDomain: string }): Promise<boolean> {
        if (data.oldDomain === data.newDomain) return true;

        try {
            await db.project.update({
                where: {
                    id: data.projectId
                },
                data: {
                    status: "IN_PROGRESS"
                }
            });
            const oldFolders = await s3Client.send(
                new ListObjectsV2Command({
                    Bucket: S3_BUCKET,
                    Prefix: `__outputs/${data.oldDomain}`
                })
            )

            if (!oldFolders.Contents || oldFolders.Contents.length == 0) {
                console.log("No contents found!");
                return false;
            }

            await Promise.all(
                oldFolders.Contents.map(async obj => {
                    const oldKey = obj.Key!;
                    const newKey = oldKey.replace(data.oldDomain, data.newDomain);
                    await s3Client.send(
                        new CopyObjectCommand({
                            Bucket: S3_BUCKET,
                            CopySource: `${S3_BUCKET}/${encodeURIComponent(oldKey)}`,
                            Key: newKey
                        })
                    );
                })
            )
            await s3Client.send(
                new DeleteObjectsCommand({
                    Bucket: S3_BUCKET,
                    Delete: {
                        Objects: oldFolders.Contents.map((obj) => ({ Key: obj.Key! })),
                        Quiet: true
                    }
                })
            )
            return true;
        } catch (e) {
            console.log(e);
            return false;
        } finally {
            await db.project.update({
                where: {
                    id: data.projectId
                },
                data: {
                    status: "READY"
                }
            });
        }
    }

    static async publicDeployment(data: PublicDeploymentData, envs: Record<string, string>[]): Promise<string> {
        let taken = true;
        let phrase = generateSlug(2);
        while (taken) {
            const proj = await db.project.findFirst({
                where: {
                    subDomain: phrase
                }
            });
            if (!proj)
                taken = false;
            else
                phrase = generateSlug();
        }
        const publicDeployment = await db.publicDeployments.create({
            data: {
                subdomain: phrase,
                gitURL: data.gitUrl
            }
        });

        await this.newTask({ projectId: publicDeployment.id, subdomain: phrase, gitUrl: data.gitUrl, outputFolder: data.outputFolder, repoBranch: data.repoBranch, deploymentId: publicDeployment.id, envs });
        return publicDeployment.id;
    }

    static async getUserData(user: user): Promise<UserDataResponse> {
        const projects = await db.project.findMany({
            where: {
                userId: user.id
            }
        });
        const data: UserDataResponse = {
            username: user.userName,
            avatar: user.avatar || "",
            projects: []
        }
        projects.forEach((p: project) => {
            data.projects.push({
                name: p.name,
                gitUrl: p.gitUrl,
                repoBranch: p.repoBranch,
                subDomain: p.subDomain,
                customDomain: p.customDomain,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt,
                id: p.id,
                env: p.env,
                outputFolder: p.outputFolder,
                deploymentStatus: p.status
            })
        });
        return data;
    }

    static async newProject(data: NewProjectData, envs: Record<string, string>[], userId: string) {
        const project = await db.project.create({
            data: {
                userId,
                name: data.name,
                gitUrl: data.gitUrl,
                repoBranch: data.repoBranch,
                status: "IN_PROGRESS",
                subDomain: data.subDomain,
                outputFolder: data.outputFolder
            }
        });
        const deployment = await db.deployment.create({
            data: {
                projectId: project.id
            }
        })
        await this.newTask({ projectId: project.id, subdomain: data.subDomain, gitUrl: data.gitUrl, outputFolder: data.outputFolder, repoBranch: data.repoBranch, deploymentId: deployment.id, envs });
    };

    static async newDeployment(data: NewDeploymentData, envs: Record<string, string>[], userId: string) {
        const prevDeployment = await db.deployment.findFirst({
            where: {
                projectId: data.id,
                latest: true
            }
        });
        if (!prevDeployment) return;
        const prevProject = await db.project.update({
            where: {
                id: data.id
            },
            data: {
                status: "IN_PROGRESS"
            },
            select: {
                subDomain: true
            }
        })
        await db.deployment.update({
            where: {
                id: prevDeployment.id
            },
            data: {
                latest: false
            }
        });
        if (data.changes) {
            await db.project.update({
                where: {
                    id: data.id
                },
                data: {
                    userId,
                    name: data.name,
                    gitUrl: data.gitUrl,
                    repoBranch: data.repoBranch,
                    subDomain: data.subDomain,
                    outputFolder: data.outputFolder
                }
            });
        }
        const deployment = await db.deployment.create({
            data: {
                projectId: data.id
            }
        })
        await this.newTask({ projectId: data.id, subdomain: data.subDomain, gitUrl: data.gitUrl, outputFolder: data.outputFolder, repoBranch: data.repoBranch, deploymentId: deployment.id, envs });
        if (data.subDomain != prevProject.subDomain) {
            await this.deleteOldFolders({ oldDomain: prevProject.subDomain })
        }
    };

    static async getProjectDeployments(projectId: string) {
        const deployments = await db.deployment.findMany({
            where: {
                projectId
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 50
        });

        const data: { id: string, time: Date, live: boolean }[] = [];

        deployments.forEach(d => {
            data.push({
                id: d.id,
                time: d.createdAt,
                live: d.live
            })
        });

        return data;
    }

    static async getDeploymentLogs(deploymentId: string) {
        const result = await clickhouseClient.query({
            query: `
                select * from deployment_logs where deployment_id='${deploymentId}'
            `,
            format: "JSON"
        });
        const rows = await result.json();
        return rows;
    }

    static async deploymentComplete(deploymentId: string) {
        try {
            await db.publicDeployments.update({
                where: {
                    id: deploymentId
                },
                data: {
                    live: false
                }
            })
        } catch { }
        try {
            const deployment = await db.deployment.update({
                where: {
                    id: deploymentId
                },
                data: {
                    live: false
                },
                select: {
                    projectId: true
                }
            })
            await db.project.update({
                where: {
                    id: deployment.projectId
                },
                data: {
                    status: "READY"
                }
            });
        } catch { }
    }

    static async isUserDeployment(projectId: string, deploymentId: string, userId: string): Promise<boolean> {
        const projects = await db.project.findUnique({
            where: {
                id: projectId,
                userId
            }
        });

        if (projects) {
            const deployment = await db.deployment.findUnique({
                where: {
                    id: deploymentId,
                    projectId
                }
            })

            if (deployment) {
                return true;
            }
        }
        return false;
    }
}