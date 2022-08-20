import { IMetaSticker, MetaSticker } from '../models/metaSticker';

export const getMetaStickerById = async (
  id: string
): Promise<IMetaSticker | null> => await MetaSticker.findById(id);

export const getMetaStickerByCode = async (
  code: string
): Promise<IMetaSticker | null> => await MetaSticker.findOne({ code });

export const metaStickerByCodeExists = async (
  code: string
): Promise<boolean> => {
  const metaSticker = await getMetaStickerByCode(code);
  return metaSticker !== null ? true : false;
};

export const metaStickerExists = async (id: string): Promise<boolean> => {
  const metaSticker = await getMetaStickerById(id);
  return metaSticker !== null ? true : false;
};

// Check validators for routes

export const checkAvailableMetaStickerCode = async (code: string) => {
  const exists = await metaStickerByCodeExists(code);
  if (exists)
    throw new Error(`The MetaSticker with code ${code} already exists`);
};

export const checkMetaStickerExists = async (id: string) => {
  const exists = await metaStickerExists(id);
  if (!exists) throw new Error(`The MetaSticker with id ${id} doesn't exists`);
};
