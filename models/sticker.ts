import { model, Schema } from 'mongoose';
import { IMetaSticker } from './metaSticker';
import { IUser } from './user';

export const allowedStickerStatus: string[] = [
  'PENDING',
  'PROVIDED',
  'REPEATED',
];

export interface ISticker {
  _id: string;
  amount: number;
  // must be one of allowedStickerStatus
  status: string;
  metaStickerId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  metaSticker?: IMetaSticker;
  user?: IUser;
}

const stickerSchema = new Schema<ISticker>({
  amount: { type: Number, required: true, min: 0 },
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
  status: {
    type: String,
    enum: allowedStickerStatus,
    required: true,
  },
});

// Enforce unique combination of userId and metaStickerId
stickerSchema.index({ userId: 1, metaStickerId: 1 }, { unique: true });

export const Sticker = model('Sticker', stickerSchema);
