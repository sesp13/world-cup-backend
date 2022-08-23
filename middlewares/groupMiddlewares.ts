import { Request, Response } from 'express';
import { Group } from '../models/group';

export const updateGroupMiddleware = async (
  req: Request,
  res: Response,
  next: any
) => {
  const { _id, code } = req.body;
  if (!_id)
    return res.status(400).json({
      msg: `No _id field provided on the request`,
    });

  const idGroup = await Group.findById(_id);
  const codeGroup = await Group.findOne({ code });

  if (idGroup == null)
    return res.status(400).json({
      msg: `The Group with _id ${_id} doesn't exists`,
    });

  if (codeGroup != null) {
    if (idGroup.id === codeGroup.id) {
      next();
    } else {
      return res.status(400).json({
        msg: `The code ${code} is already used by another group`,
      });
    }
  } else {
    next();
  }
};
