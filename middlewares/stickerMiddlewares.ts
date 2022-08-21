import { Response } from 'express';
import { stickerExistsByUserAndMeta } from '../helpers/stickerHelpers';
import { CustomRequest } from '../interfaces/customRequest';

export const isAvailableStickerForUserMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {
  const userId = req.user?._id!;
  const { metaStickerId } = req.body;
  const exists = await stickerExistsByUserAndMeta(
    userId.valueOf() as string,
    metaStickerId
  );
  if (exists)
    return res.status(400).json({
      msg: `The sticker with userId: ${userId} and metaStickerId: ${metaStickerId} already exists`,
    });

  next();
};
