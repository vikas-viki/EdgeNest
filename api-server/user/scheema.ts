import z from "zod";

export const NewProjectScheema = z.object({
    name: z.string(),
    gitUrl: z.string(),
    repoBranch: z.string(),
    subDomain: z.string(),
    env: z.string(),
    outputFolder: z.string()
});

export type NewProjectData = z.infer<typeof NewProjectScheema>;

export const NewDeploymentScheema = z.object({
    changes: z.boolean(),
    id: z.string(),
    name: z.string(),
    gitUrl: z.string(),
    repoBranch: z.string(),
    subDomain: z.string(),
    env: z.string(),
    outputFolder: z.string()
});

export type NewDeploymentData = z.infer<typeof NewDeploymentScheema>;

export const PublicDeploymentScheema = z.object({
    outputFolder: z.string(),
    env: z.string(),
    gitUrl: z.string(),
    repoBranch: z.string()
}).strict()

export type PublicDeploymentData = z.infer<typeof PublicDeploymentScheema>;