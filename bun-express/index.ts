import express from "express";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

require("dotenv").config();
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 8888;

app.use("", (req: express.Request, res: express.Response, next) => {
  console.log("Incoming request to ", req.baseUrl);
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req: express.Request, res: express.Response) => {
  const tasks = await prisma.task.findMany({
    include: {
      owner: true,
    },
  });
  res.send({
    data: {
      tasks: tasks,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Express server is listening at ${PORT}`);
});
