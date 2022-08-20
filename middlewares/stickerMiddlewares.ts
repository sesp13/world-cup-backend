import { Response } from 'express';
import { stickerExistsByUserAndMeta } from '../helpers/stickerHelpers';
import { CustomRequest } from '../interfaces/customRequest';

export const isAvailableStickerForUserMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {
  const userId: string = req.userId!;
  const { metaStickerId } = req.body;
  const exists = await stickerExistsByUserAndMeta(userId, metaStickerId);
  if (exists)
    return res.status(400).json({
      msg: `The sticker with userId: ${userId} and metaStickerId: ${metaStickerId} already exists`,
    });

  next();
};
