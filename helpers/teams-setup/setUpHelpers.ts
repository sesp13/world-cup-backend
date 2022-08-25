import { IMetaSticker, MetaSticker } from '../../models/metaSticker';

export const createPlayer = async (
  structure: IMetaSticker
): Promise<IMetaSticker> => {
  return await MetaSticker.findOneAndUpdate(
    { code: structure.code },
    structure,
    { new: true, upsert: true }
  );
};
