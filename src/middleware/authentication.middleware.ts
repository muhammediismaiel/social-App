import { type NextFunction,type Request, type Response } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let user = { userName: "", email: "" };
  req.user = user;
  next();
};

