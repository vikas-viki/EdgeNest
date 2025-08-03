import { isAxiosError } from "axios";
import { Request, Response } from "express";
import { AuthService } from "./service";
import { AuthScheema } from "./scheema";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { db } from "../lib/clients";

dotenv.config();

export const auth = async (req: Request, res: Response) => {
    try {
        const body = AuthScheema.parse(req.body);
        const data = await AuthService.auth(body);

        if (!data.data.installed) {
            return res.status(403).json({ message: "App Not Installed!" });
        }

        const token = jwt.sign({ userId: data.data.userId }, process.env.JWT_SECRET!, {
            expiresIn: '7d'
        });

        res.cookie('session_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: '/',
            maxAge: 7 * 23 * 60 * 60 * 1000
        }).status(200).json({ message: "Authentication successful!" });
    } catch (e) {
        const data = { message: "Error authenticating request!" };
        console.log(e);
        if (isAxiosError(e)) {
            console.log(e.response?.data);
            return res.status(e.response?.status || 401).json(data);
        }
        res.status(500).json(data);
    }
}

export const session = async (req: Request, res: Response) => {
    try {
        const session_token = req.cookies["session_token"];
        const payload = jwt.verify(session_token, process.env.JWT_SECRET!) as { userId: string };

        const user = await db.user.findFirst({
            where: {
                id: payload.userId
            }
        })
        if (user) {
            res.status(200).json({ userId: payload.userId });
        } else {
            res.sendStatus(401);
        }
    } catch {
        res.status(401).json({ message: "Unauthorised!" });
    }
}