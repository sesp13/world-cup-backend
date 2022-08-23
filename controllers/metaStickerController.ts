import { Request, Response } from 'express';
import { MetaSticker } from '../models/metaSticker';

export const getMetaStickers = async (req: Request, res: Response) => {
  const metaStickers = await MetaSticker.find();
  return res.json({ metaStickers });
};

export const createMetaSticker = async (req: Request, res: Response) => {
  try {
    const metaSticker = await MetaSticker.create(req.body);
    return res
      .status(201)
      .json({ msg: 'Success: MetaSticker created', metaSticker });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Create Metasticker ${error}`,
      error,
    });
  }
};

export const updateMetaSticker = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const metaSticker = await MetaSticker.findOneAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({
      msg: 'Success: Update Meta Sticker',
      metaSticker,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Update Metasticker ${error}`,
      error,
    });
  }
};
