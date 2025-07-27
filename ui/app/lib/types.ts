export type UserProject = {
    name: string,
    gitUrl: string
    repoBranch: string
    subDomain: string
    customDomain?: string | null
    createdAt: Date
    updatedAt: Date
}

export type UserData = {
    avatar: string,
    username: string,
    projects: UserProject[]
}

export type NewProjectData = {
    projectName: string,
    githubUrl: string,
    github_branch: string,
    sub_domain: string,
    env_file: string,
    output_folder: string,
}