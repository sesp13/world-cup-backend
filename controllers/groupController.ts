import { Request, Response } from 'express';
import { CustomRequest } from '../interfaces/customRequest';
import { Group } from '../models/group';

export const getAllGroups = async (req: Request, res: Response) => {
  const groups = await Group.find();
  return res.json({ groups });
};

export const createGroup = async (req: CustomRequest, res: Response) => {
  try {
    const group = await Group.create(req.body);
    return res.status(201).json({
      msg: `Success: Group created`,
      group,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: create group ${error}`,
      error,
    });
  }
};
