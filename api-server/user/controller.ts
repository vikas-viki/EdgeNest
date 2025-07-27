import { Request, Response } from "express";
import { UserService } from "./service";

export const getData = async (req: Request, res: Response) => {
    try {
        const data = await UserService.getUserData(req.user!);
        res.status(200).json({ user: data })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error getting data!" });
    }
}