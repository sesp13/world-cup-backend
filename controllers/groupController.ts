import { Request, Response } from 'express';
import { Group } from '../models/group';

export const getAll = async (req: Request, res: Response) => {
  const groups = await Group.find();
  return res.json({ groups });
};
