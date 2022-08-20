import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const fieldValidator = (req: Request, res: Response, next: any) => {
  //Validate fields detected in express validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({
        msg: 'Bad request, wrong fields provided',
        errors: errors.array(),
      });
  }

  next();
};
