import { Request, Response } from 'express';
import { findOrCreateTeam, setUpTeamHelper } from '../helpers/adminHelpers';

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

export const setUpTeam = async (req: Request, res: Response) => {
  try {
    let code: string = req.params.code;
    code = code.toUpperCase();

    const { team, error } = await setUpTeamHelper(code);
    if (error) {
      return res.status(400).json({ msg: error });
    }
    
    return res
      .status(200)
      .json({
        msg: 'Success! setup team',
        country: team?.country,
        members: team?.members,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: admin set up team ${error}`,
      error,
    });
  }
};
