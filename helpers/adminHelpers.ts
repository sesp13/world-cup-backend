import { Schema, Types } from 'mongoose';
import { IGroup } from '../models/group';
import { IMetaSticker } from '../models/metaSticker';
import { findOrCreateGroup } from './groupHelpers';
import { findOrCreateMetaSticker } from './metaStickerHelpers';

export const findOrCreateTeam = async (
  model: IGroup
): Promise<{ group: IGroup; players: IMetaSticker[] }> => {
  const group: IGroup = await findOrCreateGroup(model);
  const players: IMetaSticker[] = [];
  for (let i = 1; i < 21; i++) {
    const playerModel: IMetaSticker = {
      code: `${group!.code} ${i}`,
      name: `${group.name} player ${i}`,
      groupId: group._id!,
    };
    const player = await findOrCreateMetaSticker(playerModel);
    players.push(player);
  }
  return { group, players };
};
