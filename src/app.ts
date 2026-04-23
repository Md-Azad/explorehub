import express, { Request, Response } from "express";
import { router } from "./app/routes";
const app = express();

app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Server is running for explorehub." });
});

export default app;
