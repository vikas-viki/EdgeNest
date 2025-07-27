import axios from "axios";
import { AuthBody, EmailResponse } from "./scheema";
import dotenv from "dotenv";
import { GITHUB_APP_SLUG } from "../lib/constants";
import { ServiceResponse } from "../lib/types";
import { db } from "../lib/clients";
dotenv.config();

export class AuthService {
    static async auth(data: AuthBody): Promise<ServiceResponse> {
        const { code, installation_id } = data;

        const params = new URLSearchParams({
            client_id: process.env.GITHUB_CLIENT_ID!,
            client_secret: process.env.GITHUB_CLIENT_SECRET!,
            code
        });
        const response = await axios.post(`https://github.com/login/oauth/access_token?${params.toString()}`, {}, {
            headers: {
                Accept: "application/json"
            }
        });
        const { access_token } = response.data;
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const emailResponse = await axios.get("https://api.github.com/user/emails", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const installationsResponse = await axios.get("https://api.github.com/user/installations", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        const installations = installationsResponse.data;
        let installed = false;
        if (installations.total_count > 0) {
            for (let i = 0; i < installations.total_count; i++) {
                if (installations.installations[i].app_slug == GITHUB_APP_SLUG) {
                    installed = true;
                    break;
                }
            }
        }
        if (!installed) {
            return {
                status: 200,
                message: "App Not Installed!",
                data: { installed: false }
            }
        }
        const email = (emailResponse.data as EmailResponse[]).filter(e => e.primary);
        const { avatar_url, login: username, type, id } = userResponse.data;

        const user = await db.user.create({
            data: {
                userName: username,
                email: email[0].email,
                avatar: avatar_url,
                type,
                installationId: installation_id,
                subId: id.toString()
            }
        });
        return {
            status: 200,
            message: "Authentication successful!",
            data: { installed: true, userId: user.id }
        };
    }
}