import { model, Schema } from 'mongoose';

export interface IGroup {
  code: string;
  name?: string;
}

const groupSchema = new Schema<IGroup>({
  code: { type: String, unique: true, required: true },
  name: { type: String },
});

export const Group = model('Group', groupSchema);
