import { Request, Response } from 'express';
import { Sticker } from '../models/sticker';

export const getStickers = async (req: Request, res: Response) => {
  const stickers = await Sticker.find();
  return res.json({ stickers: stickers });
};
