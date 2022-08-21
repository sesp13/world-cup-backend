import { Response } from 'express';
import { CustomRequest } from '../interfaces/customRequest';

export const checkAdminRoleMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {
  if (!req.user)
    return res.status(500).json({
      msg: "Unable to validate the role without checking request's token",
    });
  if (req.user.isAdmin == false)
    return res.status(403).json({
      msg: `Invalid operation not enough permissions`,
    });
  next();
};
