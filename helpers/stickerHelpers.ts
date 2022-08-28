import { Schema } from 'mongoose';
import { IMetaSticker } from '../models/metaSticker';
import { ISticker, Sticker } from '../models/sticker';

export const findStickerById = async (id: string): Promise<ISticker | null> =>
  await Sticker.findById(id);

export const findStickersByUser = async (
  userId: string
): Promise<ISticker[] | null> => await Sticker.find({ userId });

export const findStickerByUserAndMeta = async (
  userId: string,
  metaStickerId: string
): Promise<ISticker | null> =>
  await Sticker.findOne({
    userId,
    metaStickerId,
  });

export const findOrCreateSticker = async (
  model: ISticker
): Promise<ISticker> => {
  let sticker = await Sticker.findOne({
    userId: model.userId,
    metaStickerId: model.metaStickerId,
  });
  if (sticker == null) {
    sticker = await Sticker.create(model);
  }
  return sticker;
};

export const findStickersByUserStatus = (
  status: string,
  userId: Schema.Types.ObjectId
) =>
  Sticker.find({ status, userId }).populate<{
    metaStickerId: IMetaSticker;
  }>('metaStickerId');

export const countStickersByUserStatus = async (
  status: string,
  userId: Schema.Types.ObjectId
): Promise<number> => await Sticker.countDocuments({ status, userId });

export const populateStickerModel = (model: any): ISticker => ({
  ...model.toObject(),
  metaStickerId: model.metaStickerId._id!,
  metaSticker: model.metaStickerId,
});

export const populateStickerArrayModel = (arr: any[]): ISticker[] =>
  arr.map((model: any) => populateStickerModel(model));

export const stickerExists = async (id: string): Promise<boolean> => {
  const sticker: ISticker | null = await findStickerById(id);
  return sticker !== null ? true : false;
};

export const stickerExistsByUserAndMeta = async (
  userId: string,
  metaStickerId: string
): Promise<boolean> => {
  const sticker: ISticker | null = await findStickerByUserAndMeta(
    userId,
    metaStickerId
  );
  return sticker !== null ? true : false;
};

// Check validators for routes

export const checkStickerExists = async (id: string) => {
  const exists = await stickerExists(id);
  if (!exists) throw new Error(`The sticker with _id ${id} doesn't exists`);
};
