import { Router } from "express";
import { authorizeUser } from "../middlewares";
import { deployAgain, getData, getDeploymentLogs, getProjectDeployments, newProject, subDomainExists } from "./controller";

export const userRouter = Router();

userRouter.use(authorizeUser);

userRouter.get("/", getData);

userRouter.post("/project", newProject);

userRouter.post("/new-deployment", deployAgain);

userRouter.post("/subdomain-exists", subDomainExists);

userRouter.get("/deployments/:projectId", getProjectDeployments)

userRouter.get("/logs/:deploymentId", getDeploymentLogs);