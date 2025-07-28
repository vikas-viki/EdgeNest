import { Request, Response } from "express";
import { UserService } from "./service";
import { NewDeploymentScheema, NewProjectScheema } from "./scheema";
import { db } from "../lib/clients";

export const getData = async (req: Request, res: Response) => {
    try {
        const data = await UserService.getUserData(req.user!);
        res.status(200).json({ user: data })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error getting data!" });
    }
}

export const newProject = async (req: Request, res: Response) => {
    try {
        const data = NewProjectScheema.parse(req.body);
        const envs: Record<string, string>[] = [];

        const project = await db.project.findFirst({
            where: {
                subDomain: data.subDomain
            }
        })

        if (project && req.user!.id != project.userId) {
            return res.status(403).json({ message: "Project already exists!" });
        }

        if (project && project.status == "IN_PROGRESS") {
            return res.status(202).json({ message: "Deployment In progress!" });
        }

        data.env.trim().split("\n").forEach(e => {
            const s = e.split("=", 2);
            if (s[0] != "" && s[1]) {
                envs.push({
                    name: s[0],
                    value: s[1]
                })
            }
        });
        await UserService.newProject(data, envs, req.user!.id);
        return res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error creating project!" });
    }
}

export const deployAgain = async (req: Request, res: Response) => {
    try {
        console.log("new deployment");
        const data = NewDeploymentScheema.parse(req.body);
        const envs: Record<string, string>[] = [];

        if (!req.user || !data.id) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const project = await db.project.findUnique({
            where: {
                userId: req.user.id,
                id: data.id
            }
        });

        if (!project) {
            return res.status(400).json({ message: "Project not found!" });
        }

        data.env.trim().split("\n").forEach(e => {  
            const s = e.split("=", 2);
            if (s[0] != "" && s[1]) {
                envs.push({
                    name: s[0],
                    value: s[1]
                })
            }
        });

        await UserService.newDeployment(data, envs, req.user.id);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error deploying project!" });
    }
}

export const subDomainExists = async (req: Request, res: Response) => {
    try {
        const { subdomain } = req.body;
        const project = await db.project.findUnique({
            where: {
                subDomain: subdomain
            }
        });

        if (project) {
            throw ("");
        }
        return res.status(200).json({ message: "Subdomain available!" });
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: "Subdomain Already exists!" });
    }
}

export const getProjectDeployments = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const projectId = req.params.projectId;
        if (!user || !projectId) {
            return res.status(400).json({ message: "Invalid Request" });
        }

        const project = await db.project.findUnique({
            where: {
                userId: req.user!.id,
                id: projectId
            }
        });

        if (!project) {
            return res.status(404).json({ message: "Not found!" });
        }

        const data = await UserService.getProjectDeployments(projectId);
        return res.status(200).json({ deployments: data });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error getting deployments!" });
    }
}

export const getDeploymentLogs = async (req: Request, res: Response) => {
    try {
        const deploymentId = req.params.deploymentId;

        if (!deploymentId) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const logs = await UserService.getDeploymentLogs(deploymentId);
        res.status(200).json({ logs });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error getting deployment logs!" });
    }
}