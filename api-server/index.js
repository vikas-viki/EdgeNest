const express = require("express");
const { generateSlug } = require("random-word-slugs");
const { RunTaskCommand, ECSClient } = require("@aws-sdk/client-ecs");
require("dotenv").config();

const app = express();
app.use(express.json());

const ecsClient = new ECSClient({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY.toString(),
        secretAccessKey: process.env.S3_SECRET_KEY.toString()
    }
})

const config = {
    CLUSTER: 'arn:aws:ecs:ap-south-1:979188187252:cluster/edgenest-builder-cluster',
    TASK: 'arn:aws:ecs:ap-south-1:979188187252:task-definition/edgenest-builder-task'
}

app.post("/project",async (req, res) => {
    const { gitURL } = req.body;
    const projectSlug = generateSlug();

    const cmd = new RunTaskCommand({
        cluster: config.CLUSTER,
        taskDefinition: config.TASK,
        launchType: 'FARGATE',
        count: 1,
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: ["subnet-000459d6539048077", "subnet-0019f47cb9015c938", "subnet-0e9bea79e42c171ee"],
                securityGroups: ["sg-0022fbb54b8684052"],
                assignPublicIp: 'ENABLED'
            }
        },
        overrides: {
            containerOverrides: [
                {
                    name: 'edgenest-builder-image',
                    environment: [
                        {
                            name: 'PROJECT_ID',
                            value: projectSlug
                        },
                        {
                            name: 'GIT_REPOSITORY_URL',
                            value: gitURL
                        }
                    ]
                }
            ]
        }
    });

    await ecsClient.send(cmd);
    return res.status(200).json({status: 'queued', slug: projectSlug, url: `http://${projectSlug}.localhost:3000/`})
});

app.listen(9000, () => {
    console.log("Api server running on port 9000!");
})