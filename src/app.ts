import express, { Request, Response } from "express";
import "dotenv/config";

import "./app/config/passport";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Server is running for tour management." });
});

export default app;
