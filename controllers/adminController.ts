import { Request, Response } from 'express';
import { findOrCreateTeam } from '../helpers/adminHelpers';

/*
  Create a new tea
*/
export const createSoccerTeam = async (req: Request, res: Response) => {
  try {
    const { group, players } = await findOrCreateTeam(req.body);
    return res.status(200).json({
      msg: 'Success: Admin create soccer team',
      group,
      players,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: admin create soccer team ${error}`,
      error,
    });
  }
};
