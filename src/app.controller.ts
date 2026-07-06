import express from "express";
import { type NextFunction, type Request, type Response } from "express";
import { autRouter } from "./modules";

export function bootstrap() {
  const app = express();
  const port = 3000;
  app.use(express.json());
  app.use("/auth", autRouter);
  app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
    return res
      .status((error.cause as number) || 500)
      .json({ message: error.message, success: false });
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
