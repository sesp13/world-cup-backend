import { model, Schema } from 'mongoose';
import { IGroup } from './group';

export interface IMetaSticker {
  _id: string;
  code: string;
  groupId: Schema.Types.ObjectId;
  name?: string;
  group?: IGroup;
}

const metaStickerSchema = new Schema<IMetaSticker>({
  code: { type: String, required: true, unique: true },
  groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
  name: { type: String },
});

export const MetaSticker = model('MetaSticker', metaStickerSchema);
