import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req: express.Request, res: express.Response) => {
  const tasks = await prisma.task
    .findMany()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
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
