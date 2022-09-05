import { Schema, Types } from 'mongoose';
import { IMetaSticker } from '../models/metaSticker';
import { ISticker, Sticker } from '../models/sticker';
import { getMetaStickerByCode } from './metaStickerHelpers';

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

export const findStickerByMetaStickerId = async (
  metaStickerId: string
): Promise<ISticker | null> => await Sticker.findOne({ metaStickerId });

export const findStickerByMetaStickerCode = async (
  code: string
): Promise<ISticker | null> => {
  const metaSticker = await getMetaStickerByCode(code);
  if (!metaSticker) return null;

  const metaId = metaSticker._id!.valueOf() as string;
  const sticker = await findStickerByMetaStickerId(metaId);
  if (!sticker) return null;

  sticker.metaSticker = metaSticker;
  return sticker;
};

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

export const getNewStatusByAmount = (
  amount: number
): { amount: number; status: string } => {
  let status: string = 'PENDING';
  if (amount < 0) {
    amount = 0;
    status = 'PENDING';
  } else if (amount == 0) {
    status = 'PENDING';
  } else if (amount == 1) {
    status = 'PROVIDED';
  } else if (amount > 1) {
    status = 'REPEATED';
  }
  return { amount, status };
};

export const checkUserOwnerShipForStickerArray = async (
  userId: string,
  stickerIds: string[]
): Promise<{ stickers?: ISticker[]; error?: string }> => {
  const stickers: ISticker[] = [];
  for (const id of stickerIds) {
    if (!Types.ObjectId.isValid(id)) {
      return { error: `The id ${id} is invalid` };
    }

    const sticker = await findStickerById(id);
    if (sticker == null) {
      return { error: `The sticker with id ${id} doesn't exists` };
    } else {
      const stickerUserId = sticker.userId.valueOf() as string;
      if (userId !== stickerUserId) {
        return { error: `The sticker ${id} doesn't belongs to user ${userId}` };
      } else {
        stickers.push(sticker);
      }
    }
  }
  return { stickers };
};

// Check validators for routes

export const checkStickerExists = async (id: string) => {
  const exists = await stickerExists(id);
  if (!exists) throw new Error(`The sticker with _id ${id} doesn't exists`);
};
