import { Request, Response } from 'express';
import { CustomRequest } from '../interfaces/customRequest';
import { Sticker } from '../models/sticker';

export const getStickers = async (req: Request, res: Response) => {
  const stickers = await Sticker.find();
  return res.json({ stickers: stickers });
};

export const createSticker = async (req: CustomRequest, res: Response) => {
  return res.status(200).json({ msg: 'POST: Create sticker' });
};
