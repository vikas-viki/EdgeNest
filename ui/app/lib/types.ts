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