import { Schema, model } from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

// Modify to Json convertions|
userSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

export const User = model<IUser>('User', userSchema);
