import { Response } from 'express';
import {
  checkUserOwnerShipForStickerArray,
  findStickerById,
  stickerExistsByUserAndMeta,
} from '../helpers/stickerHelpers';
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

export const updateStickerMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {
  const user = req.user;
  if (!user)
    return res.status(400).json({
      msg: `Unable to update the sticker without getting request's user`,
    });

  const { _id } = req.body;
  if (!_id) return res.status(400).json({ msg: `The _id field id required` });

  const sticker = await findStickerById(_id);
  if (!sticker)
    return res
      .status(400)
      .json({ msg: `The sticker with id ${_id} doesn't exists` });

  // Only admins and owners are enabled to update
  if (user.isAdmin) return next();

  const requestUserId: string = user._id!.valueOf() as string;
  const stickerUserId: string = sticker.userId.valueOf() as string;
  if (requestUserId == stickerUserId) return next();

  return res.status(403).json({
    msg: `Error the user doesn't have enough permissions to perform this action`,
  });
};

export const addManyStickersMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: any
) => {
  const user = req.user;
  if (!user)
    return res.status(400).json({
      msg: `Unable to update the sticker without getting request's user`,
    });

  const stickerIds: string[] = req.body.stickerIds;
  if (!stickerIds)
    return res.status(400).json({ msg: `The field stickerIds is required` });

  if (!Array.isArray(stickerIds))
    return res
      .status(400)
      .json({ msg: `The field stickerIds must be an array` });

  if (!user.isAdmin) {
    const userId = user?._id!.valueOf() as string;
    const { error } = await checkUserOwnerShipForStickerArray(
      userId,
      stickerIds
    );

    if (error) {
      return res.status(400).json({
        msg: `Error: Add many stickers ${error}`,
        error,
      });
    }
  }

  return next();
};
