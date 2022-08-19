"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_1 = require("../models/user");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.find();
    res.json({ users });
});
exports.getUsers = getUsers;
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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const emailExsts = yield user_1.User.findOne({
            where: {
                email: body.email,
            },
        });
        if (emailExsts)
            return res.status(400).json({
                msg: `The email ${body.email} has been taken`,
            });
        //Create and save new model
        const user = yield user_1.User.create(body);
        // await user.save();
        return res.json({ user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Internal server error, please contact server admin',
        });
    }
});
exports.createUser = createUser;
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
//# sourceMappingURL=userController.js.map