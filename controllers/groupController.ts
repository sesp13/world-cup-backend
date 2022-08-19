import { Request, Response } from 'express';
import { Group } from '../models/group';

export const getAllGroups = async (req: Request, res: Response) => {
  const groups = await Group.find();
  return res.json({ groups });
};
