import { Request, Response } from 'express';
import { Schema } from 'mongoose';
import { findAllMetaStickers } from '../helpers/metaStickerHelpers';
import {
  countStickersByUserStatus,
  findOrCreateSticker,
  findStickerById,
  findStickersByUserStatus,
  populateStickerArrayModel,
} from '../helpers/stickerHelpers';
import { CustomRequest } from '../interfaces/customRequest';
import { IMetaSticker } from '../models/metaSticker';
import { ISticker, Sticker } from '../models/sticker';
import { IUser } from '../models/user';

export const getStickers = async (req: Request, res: Response) => {
  const stickers = await Sticker.find();
  return res.json({ stickers });
};

export const getStickerById = async (req: Request, res: Response) => {
  try {
    const sticker = await findStickerById(req.params.id);
    return res.status(200).json({
      msg: 'Success get sticker by id',
      sticker,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: get Sticker by id ${error}`,
      error,
    });
  }
};

export const getStickersByUser = async (req: CustomRequest, res: Response) => {
  try {
    const userId: string = req.user?._id!.valueOf() as string;
    const populatedStickers = await Sticker.find({ userId }).populate<{
      // metaStickerId will have the mapped user
      metaStickerId: IMetaSticker;
    }>('metaStickerId');

    const stickers: ISticker[] = populateStickerArrayModel(populatedStickers);

    return res.status(200).json({
      msg: `Success: Find stickers by user`,
      stickers: stickers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Find stickers by user ${error}`,
      error,
    });
  }
};

export const getStickersByUserAndStatus = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    // Paged params
    let limit: any = req.query.limit;
    let skip: any = req.query.skip;
    const isPaged: boolean = req.query.paged !== undefined;
    limit = isNaN(limit) ? 5 : Number(limit);
    skip = isNaN(skip) ? 0 : Number(skip);

    const userId = req.user?._id!;
    const status = req.params.status;
    const query = isPaged
      ? findStickersByUserStatus(status, userId).skip(skip).limit(limit)
      : findStickersByUserStatus(status, userId);

    const [populatedStickers, totalStickers] = await Promise.all([
      query,
      countStickersByUserStatus(status, userId),
    ]);
    const stickers = populateStickerArrayModel(populatedStickers);

    let responseBody: any = {
      msg: `Success: Find pending stickers by user and status`,
      stickers,
      totalStickers,
    };
    if (isPaged) responseBody = { ...responseBody, skip, limit };

    return res.status(200).json(responseBody);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Get pending stickers by user and status ${error}`,
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
    console.log(error);
    return res.status(500).json({
      msg: `Error: Update Sticker ${error}`,
      error,
    });
  }
};

export const createStickerCollection = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const user: IUser = req.user!;
    const metaStickers: IMetaSticker[] = await findAllMetaStickers();

    for (const meta of metaStickers) {
      await findOrCreateSticker({
        userId: user._id!,
        metaStickerId: meta._id!,
        amount: 0,
        status: 'PENDING',
      });
    }

    return res.status(201).json({
      msg: 'Success! Create Sticker collection',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Create Sticker collection ${error}`,
      error,
    });
  }
};
