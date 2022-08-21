import { Request } from 'express';
import { IUser } from '../models/user';

//Extends express request to add custom properties
export interface CustomRequest extends Request {
  user?: IUser
}
