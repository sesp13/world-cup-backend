import { Request, Response } from 'express';
import { Schema } from 'mongoose';
import { findStickersByUser } from '../helpers/stickerHelpers';
import { CustomRequest } from '../interfaces/customRequest';
import { Sticker } from '../models/sticker';

export const getStickers = async (req: Request, res: Response) => {
  const stickers = await Sticker.find();
  return res.json({ stickers });
};

export const getStickersByUser = async (req: CustomRequest, res: Response) => {
  try {
    const userId: string = req.user?._id!.valueOf() as string;
    const stickers = await findStickersByUser(userId);
    return res.status(200).json({
      msg: `Success: Find stickers by user`,
      stickers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Find stickers by user ${error}`,
      error,
    });
  }
};

export const createSticker = async (req: CustomRequest, res: Response) => {
  try {
    const userId: Schema.Types.ObjectId = req.user?._id!;
    const { metaStickerId } = req.body;

    const sticker = await Sticker.create({
      userId,
      metaStickerId,
      amount: 0,
      status: 'PENDING',
    });

    return res.status(200).json({ msg: 'Success: Sticker created', sticker });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Create Sticker ${error}`,
      error,
    });
  }
};

export const updateSticker = async (req: CustomRequest, res: Response) => {
  try {
    const { _id } = req.body;
    const sticker = await Sticker.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({
      msg: 'Success: Update sticker',
      sticker,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error: Update Sticker ${error}`,
      error,
    });
  }
};
