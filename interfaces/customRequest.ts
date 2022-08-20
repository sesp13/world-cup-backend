import { Request } from 'express';

//Extends express request to add custom properties
export interface CustomRequest extends Request {
  userId?: string;
}
