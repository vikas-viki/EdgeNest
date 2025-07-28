export type UserProject = {
    name: string,
    gitUrl: string
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    createdAt: Date
    updatedAt: Date
    id: string,
    env: string | null,
    outputFolder: string,
    deploymentStatus: DeploymentStatus
}

export type ProjectDeployments = {
    id: string,
    time: Date
}

export enum DeploymentStatus {
    QUEUED = 'QUEUED',
    IN_PROGRESS = 'IN_PROGRESS',
    READY = 'READY'
};

export type UserData = {
    avatar: string,
    username: string,
    projects: UserProject[]
}

export type NewProjectData = {
    name: string,
    gitUrl: string,
    repoBranch: string,
    subDomain: string,
    env: string,
    outputFolder: string,
}

export type NewDeploymentData = {
    id: string
    name: string,
    gitUrl: string,
    repoBranch: string,
    subDomain: string,
    env: string,
    outputFolder: string,
}

export type NewProjectResponse = {
    status: 'in progress',
    name: string,
    id: string,
    slug: string,
    url: string
};

export type DeploymentLogs = {
    log: string,
    time: string
}

export type LogsResponse = {
    deployment_id: string,
    timestamp: string,
    log: string
}