import { model, Schema } from 'mongoose';

export interface IGroup {
  _id?: Schema.Types.ObjectId;
  code: string;
  name?: string;
}

const groupSchema = new Schema<IGroup>({
  code: { type: String, unique: true, required: true },
  name: { type: String },
});

export const Group = model('Group', groupSchema);
