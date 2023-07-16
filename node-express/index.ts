import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Express server is listening at ${PORT}`);
});
