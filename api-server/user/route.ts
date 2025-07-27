import { Router } from "express";
import { authorizeUser } from "../middlewares";
import { getData } from "./controller";

export const userRouter = Router();

userRouter.use(authorizeUser);

userRouter.get("/", getData);