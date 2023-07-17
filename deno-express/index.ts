// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const vars = config();
const app = express();
const PORT = vars.PORT || 8888;

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(PORT);
