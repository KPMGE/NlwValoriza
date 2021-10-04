import { Request, Response, NextFunction } from "express";

export const ensureAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // check if the user is an admin, for now, just assume it is
  const isAdmin = true;

  if (isAdmin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized user!",
  });
};
