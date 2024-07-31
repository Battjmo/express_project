import { NextFunction, Response, Request } from "express";
import { CustomRequest } from "../types";

export const middleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  req.middlewareMessage = "Hello from middleware!";
  next();
};
