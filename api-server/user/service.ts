import { RunTaskCommand } from "@aws-sdk/client-ecs";
import { ecsClient } from "../clients";
import { clickhouseClient, db } from "../lib/clients";
import { UserDataResponse } from "../lib/types";
import { project, user } from "../prisma-client";
import { NewDeploymentData, NewProjectData } from "./scheema";

export class UserService {
    static config = {
        CLUSTER: 'arn:aws:ecs:ap-south-1:979188187252:cluster/edgenest-builder-cluster',
        TASK: 'arn:aws:ecs:ap-south-1:979188187252:task-definition/edgenest-builder-task',
        subnets: ["subnet-000459d6539048077", "subnet-0019f47cb9015c938", "subnet-0e9bea79e42c171ee"],
        securityGroups: ["sg-0022fbb54b8684052"]
    };

    static async newTask(data: { projectId: string, gitUrl: string, outputFolder: string, repoBranch: string, deploymentId: string, envs: Record<string, string>[] }) {
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
        await this.newTask({ projectId: project.id, gitUrl: data.gitUrl, outputFolder: data.outputFolder, repoBranch: data.repoBranch, deploymentId: deployment.id, envs });
    };

    static async newDeployment(data: NewDeploymentData, envs: Record<string, string>[], userId: string) {
        const prevDeployment = await db.deployment.findFirst({
            where: {
                projectId: data.id,
                latest: true
            }
        });
        if (!prevDeployment) return;
        await db.deployment.update({
            where: {
                id: prevDeployment.id
            },
            data: {
                latest: false
            }
        });
        const deployment = await db.deployment.create({
            data: {
                projectId: data.id
            }
        })
        await this.newTask({ projectId: data.id, gitUrl: data.gitUrl, outputFolder: data.outputFolder, repoBranch: data.repoBranch, deploymentId: deployment.id, envs });
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

        const data: { id: string, time: Date }[] = [];

        deployments.forEach(d => {
            data.push({
                id: d.id,
                time: d.createdAt
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

    static async deploymentComplete(projectId: string) {
        await db.project.update({
            where: {
                id: projectId
            },
            data: {
                status: "READY"
            }
        })
    }
}