import { DeploymentStatus, user } from "../prisma-client"

export type ServiceResponse = {
    status: number,
    message: string,
    data?: any
}

declare module "express" {
    interface Request {
        user?: user;
    }
}

export type UserProject = {
    name: string,
    gitUrl: string
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    createdAt: Date
    updatedAt: Date,
    id: string
    env: string | null,
    outputFolder: string,
    deploymentStatus: DeploymentStatus
}

export type UserDataResponse = {
    avatar: string,
    username: string,
    projects: UserProject[]
}