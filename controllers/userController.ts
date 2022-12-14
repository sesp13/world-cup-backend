import { Request, Response } from 'express';
import { genSaltSync, hashSync } from 'bcryptjs';
import { User } from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  return res.json({ users });
};

// export const getUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const user = await User.findByPk(id);
//   if (user)
//     res.json({ user })
//   else
//     res.status(404).json({
//       msg: `The user with id ${id} was not found`
//     });
// }

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const emailExists = await User.findOne({
      email,
    });

    if (emailExists)
      return res.status(400).json({
        msg: `The email ${email} has been taken`,
      });

    const user = new User({ name, email });

    // Ecrypt password
    const salt = genSaltSync();
    user.password = hashSync(password, salt);

    await user.save();
    return res.json({ msg: `Success: User saved`, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Internal server error, please contact server admin',
    });
  }
};

// export const putUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { body } = req;
//   try {

//     const user = await User.findByPk(id);
//     if (!user)
//       return res.status(400).json({
//         msg: `The user with id ${id} was not found`
//       });

//     //Verify non duplicate emails
//     if (body.email) {
//       const userFound = await User.findOne({
//         where: {
//           email: body.email
//         }
//       })

//       if (userFound && (user.getDataValue('id') != userFound.getDataValue('id')))
//         return res.status(400).json({
//           msg: `The email ${body.email} has been taken`
//         });
//     }

//     //Update user
//     await user.update(body);

//     return res.status(200).json({ user });

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       msg: "Internal server error, please contact server admin"
//     })
//   }
// }

// export const deleteUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {

//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(400).json({
//         msg: `The user with id ${id} was not found`
//       });
//     }

//     //Phsycal elimination
//     // await user.destroy();

//     //Logical elimination
//     await user.update({status: false});

//     return res.status(200).json({
//       user
//     });

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       msg: "Internal server error, please contact server admin"
//     })
//   }
// }
