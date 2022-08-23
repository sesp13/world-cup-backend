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
