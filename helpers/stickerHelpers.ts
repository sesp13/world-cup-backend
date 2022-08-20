import { ISticker, Sticker } from '../models/sticker';

export const getStickerByUserIdAndMetaStickerId = async (
  userId: string,
  metaStickerId: string
): Promise<ISticker | null> =>
  await Sticker.findOne({
    userId,
    metaStickerId,
  });

export const isAvailableStickerForUser = async (
  userId: string,
  metaStickerId: string
): Promise<boolean> => {
  const sticker: ISticker | null = await getStickerByUserIdAndMetaStickerId(
    userId,
    metaStickerId
  );
  return sticker !== null ? true : false;
};
