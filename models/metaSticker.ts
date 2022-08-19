import { model, Schema } from 'mongoose';

interface IMetaSticker {
  code: string;
  groupId: Schema.Types.ObjectId;
  name?: string;
}

const metaStickerSchema = new Schema<IMetaSticker>({
  code: { type: String, required: true },
  groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
  name: { type: String },
});

export const MetaSticker = model('MetaSticker', metaStickerSchema);
