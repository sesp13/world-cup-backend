import { Request, Response } from 'express';
import { Group, IGroup } from '../models/group';

export const getAllGroups = async (req: Request, res: Response) => {
  const groups = await Group.find();
  return res.json({ groups });
};

export const createGroup = async (req: Request, res: Response) => {
  try {
    const body: any = req.body;
    const groupExists: IGroup | null = await Group.findOne({
      where: { code: body.code },
    });
    
    if (groupExists)
      return res.status(400).json({
        msg: `Error a group with the same code already exists`,
      });

    const newGroup = await Group.create(body);

    return res.status(201).json({
      msg: `Success: Group created`,
      group: newGroup,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: create group ${error}`,
      error,
    });
  }
};
