import { IUser } from "./user.interface";
declare module "express" {
  interface Request {
    body: {};
    params: {};
    query: {};
    headers: {};
  }

  interface Request {
    user: IUser;
  }
}
