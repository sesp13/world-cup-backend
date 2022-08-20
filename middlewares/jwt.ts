import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { CustomRequest } from '../interfaces/customRequest';

import { IUser, User } from '../models/user';

export const validateJWT = async (
  req: CustomRequest,
  response: Response,
  next: any
) => {
  const invalidMessage = 'Invalid token';
  const fullAuth: string[] | undefined = req.headers.authorization?.split(' ');
  if (!fullAuth || fullAuth.length < 1)
    return response.status(400).json({ msg: invalidMessage });

  const token: string = fullAuth[1];
  try {
    const payload: any = verify(token, process.env.PRIVATEKEY!);
    const { id } = payload;
    if (!id) return response.status(400).json({ msg: invalidMessage });

    const user: IUser | null = await User.findById(id);
    if (!user) return response.status(400).json({ msg: invalidMessage });

    // Use extended request property
    req.userId = id;

    next();
  } catch (error) {
    return response.status(400).json({ msg: invalidMessage });
  }
};
