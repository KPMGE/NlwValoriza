import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // receive token
  const authToken = request.headers.authorization;

  // token exists
  if (!authToken) {
    return response.status(401).end();
  }

  // validade token
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(
      token,
      "fe35558d8412be57efd750d667d292ce"
    ) as IPayload;
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }

  // retrive user's data
};
