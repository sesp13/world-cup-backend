import { Request, Response } from 'express';
import { CustomRequest } from '../interfaces/customRequest';
import { Group } from '../models/group';

export const getAllGroups = async (req: Request, res: Response) => {
  const groups = await Group.find();
  return res.json({ msg: 'Success get all groups', groups });
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

export const updateGroup = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const group = await Group.findByIdAndUpdate(_id, req.body, { new: true });
    return res.status(200).json({
      msg: 'Success: Update group',
      group,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: update group ${error}`,
      error,
    });
  }
};
