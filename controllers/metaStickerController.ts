import { Request, Response } from 'express';
import { MetaSticker } from '../models/metaSticker';

export const getMetaStickers = async (req: Request, res: Response) => {
  const metaStickers = await MetaSticker.find();
  return res.json({ stickers: metaStickers });
};
