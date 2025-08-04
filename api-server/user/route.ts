import { Router } from "express";
import { authorizeUser } from "../middlewares";
import { deployAgain, getData, getDeploymentLogs, getProjectDeployments, newProject, publicDeployment, publicDeploymentLogs, subDomainExists } from "./controller";
import rateLimit from "express-rate-limit";

export const userRouter = Router();
const limit = rateLimit({
    windowMs: 30 * 1000,
    max: 1,
    keyGenerator: (req) => {
        return req.user?.id || req.ip || "unknown-client";
    },
    standardHeaders: true,
    legacyHeaders: true,
    message: "Only one public deployment per 30s, please wait!"
})

userRouter.get("/", authorizeUser, getData);

userRouter.post("/project", limit, authorizeUser, newProject);

userRouter.post("/new-deployment", limit, authorizeUser, deployAgain);

userRouter.post("/subdomain-exists", authorizeUser, subDomainExists);

userRouter.get("/deployments/:projectId", authorizeUser, getProjectDeployments);

userRouter.get("/logs/:deploymentId", authorizeUser, getDeploymentLogs);

userRouter.post("/public-deployment", limit, publicDeployment);

userRouter.get("/public-deployment-logs/:id", publicDeploymentLogs);