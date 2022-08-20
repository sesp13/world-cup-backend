import { model, Schema } from 'mongoose';
import { IMetaSticker } from './metaSticker';
import { IUser } from './user';

export type StickerStatus = 'PENDING' | 'PROVIDED' | 'REPEATED';

export interface ISticker {
  _id: string;
  amount: number;
  status: StickerStatus;
  metaStickerId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  metaSticker?: IMetaSticker;
  user?: IUser;
}

const stickerSchema = new Schema<ISticker>({
  amount: { type: Number, required: true },
  metaStickerId: {
    type: Schema.Types.ObjectId,
    ref: 'MetaSticker',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Enforce unique combination of userId and metaStickerId 
stickerSchema.index({ userId: 1, metaStickerId: 1 }, { unique: true });

export const Sticker = model('Sticker', stickerSchema);
