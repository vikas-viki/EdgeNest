import { Router } from "express";
import { authorizeUser } from "../middlewares";
import { deployAgain, getData, getDeploymentLogs, getProjectDeployments, newProject, publicDeployment, publicDeploymentLogs, subDomainExists } from "./controller";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";

export const userRouter = Router();
const limit = rateLimit({
    windowMs: 30 * 1000,
    max: 1,
    standardHeaders: true,
    legacyHeaders: true,
    message: { message: "Only one deployment per 30s, please wait!" }
})
const limit2 = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: true,
    message: { message: "Only 50 deployments per day, Good day!" }
})
userRouter.get("/", authorizeUser, getData);

userRouter.post("/project", limit, limit2, authorizeUser, newProject);

userRouter.post("/new-deployment", limit, limit2,authorizeUser, deployAgain);

userRouter.post("/subdomain-exists", authorizeUser, subDomainExists);

userRouter.get("/deployments/:projectId", authorizeUser, getProjectDeployments);

userRouter.get("/logs/:deploymentId", authorizeUser, getDeploymentLogs);

userRouter.post("/public-deployment", limit, limit2, publicDeployment);

userRouter.get("/public-deployment-logs/:id", publicDeploymentLogs);