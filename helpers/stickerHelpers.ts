import { ISticker, Sticker } from '../models/sticker';

export const getStickerByUserAndMeta = async (
  userId: string,
  metaStickerId: string
): Promise<ISticker | null> =>
  await Sticker.findOne({
    userId,
    metaStickerId,
  });


export const stickerExistsByUserAndMeta = async (
  userId: string,
  metaStickerId: string
): Promise<boolean> => {
  const sticker: ISticker | null = await getStickerByUserAndMeta(
    userId,
    metaStickerId
  );
  return sticker !== null ? true : false;
};
