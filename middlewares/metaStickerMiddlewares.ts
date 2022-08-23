import { Request, Response } from 'express';
import { MetaSticker } from '../models/metaSticker';

export const updateMetaStickerMiddleware = async (
  req: Request,
  res: Response,
  next: any
) => {
  const { _id, code } = req.body;
  if (!_id)
    return res.status(400).json({
      msg: `No _id field provided on the request`,
    });

  const idMetaSticker = await MetaSticker.findById(_id);
  const codeMetaSticker = await MetaSticker.findOne({ code });

  if (idMetaSticker == null)
    return res.status(400).json({
      msg: `The MetaSticker with _id ${_id} doesn't exists`,
    });

  if (codeMetaSticker != null) {
    if (idMetaSticker.id === codeMetaSticker.id) {
      next();
    } else {
      return res.status(400).json({
        msg: `The code ${code} is already used by another MetaSticker`,
      });
    }
  } else {
    next();
  }
};
