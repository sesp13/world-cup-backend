import { Response } from 'express';
import { CustomRequest } from '../interfaces/customRequest';

export const isAvailableStickerForUserMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {};
