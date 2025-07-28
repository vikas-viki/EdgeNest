import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { user } from "./prisma-client";
import { db } from "./lib/clients";

export const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session_token = req.cookies["session_token"];
        const payload = jwt.verify(session_token, process.env.JWT_SECRET!) as { userId: string };

        const user = await db.user.findFirst({
            where: {
                id: payload.userId
            }
        });
        if (user) {
            req.user = user;
            next();
        } else {
            return res.sendStatus(401);
        }
    } catch (e) {
        console.log(e);
        return res.status(401).json({ message: "Unauthorised!" });
    }
}

export const isSessionValid = async (session_token: string): Promise<{ isValid: boolean, user?: user }> => {
    try {
        const payload = jwt.verify(session_token, process.env.JWT_SECRET!) as { userId: string };

        const user = await db.user.findFirst({
            where: {
                id: payload.userId
            }
        });
        if (user) {
            return { isValid: true, user };
        } else {
            return { isValid: false };
        }
    } catch (e) {
        console.log(e);
        return { isValid: false };
    }
}