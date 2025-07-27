import { db } from "../lib/clients";
import { UserDataResponse } from "../lib/types";
import { user } from "../prisma/client";

export class UserService {
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
        projects.forEach(p => {
            data.projects.push({
                name: p.name,
                gitUrl: p.gitUrl,
                repoBranch: p.repoBranch,
                subDomain: p.subDomain,
                customDomain: p.customDomain,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt
            })
        });
        return data;
    }
}