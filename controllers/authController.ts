import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import { generateJWT } from '../helpers/jwt';
import { CustomRequest } from '../interfaces/customRequest';
import { IUser, User } from '../models/user';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const errorMessage: string = 'Invalid user / password';
  try {
    const user: IUser | null = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        msg: errorMessage,
      });

    // Verify password
    const isValidPassword: boolean = compareSync(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({
        msg: errorMessage,
      });

    // Generate JWT
    const id = user._id!.valueOf() as string;
    const token: string = await generateJWT(id);

    return res.status(200).json({
      msg: 'Success: Login ok!',
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Login ${error}`,
      error,
    });
  }
};

export const renewSession = async (req: CustomRequest, res: Response) => {
  try {
    const user: IUser = req.user!;
    const id = user._id!.valueOf() as string;
    const token: string = await generateJWT(id);

    return res.status(200).json({
      msg: 'Success: Renew Session!',
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `Error: Renew Session ${error}`,
      error,
    });
  }
};
