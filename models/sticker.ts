import { model, Schema } from 'mongoose';
import { IMetaSticker } from './metaSticker';
import { IUser } from './user';

type StickerStatus = 'PENDING' | 'PROVIDED' | 'REPEATED';

interface ISticker {
  _id: string,
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

export const Sticker = model('Sticker', stickerSchema);
