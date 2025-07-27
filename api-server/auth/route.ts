import { Router } from "express";
import { auth, session } from "./controller";

export const authRouter = Router();

authRouter.post("/", auth);

authRouter.get("/session", session);