import { model, Schema } from 'mongoose';

interface IGroup {
  code: string;
  name: string;
}

const groupSchema = new Schema<IGroup>({
  code: { type: String, unique: true },
  name: { type: String },
});

export const Group = model('Group', groupSchema);
