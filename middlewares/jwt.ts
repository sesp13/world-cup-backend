import { Request, Response } from 'express';

export const validateJWT = async (
  req: Request,
  response: Response,
  next: any
) => {
  const token = req.headers.authorization;
  next();
};
