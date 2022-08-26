import { FullTeam } from '../interfaces/fullTeam';
import { IGroup } from '../models/group';
import { IMetaSticker } from '../models/metaSticker';
import { findOrCreateGroup } from './groupHelpers';
import { findOrCreateMetaSticker } from './metaStickerHelpers';
import {
  setUpEcuador,
  setUpNetherlands,
  setUpSenegal,
  setUpQatar,
  setUpEngland,
  setUpIran,
  setUpUnitedStates,
  setUpWales,
} from './teams-setup';

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

export const setUpTeamHelper = async (
  code: string
): Promise<{ team?: FullTeam; error?: string }> => {
  let country: IGroup;
  let members: IMetaSticker[];

  switch (code) {
    case 'QAT': {
      let { country: resultCountry, members: resultMembers } =
        await setUpQatar();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'ECU': {
      let { country: resultCountry, members: resultMembers } =
        await setUpEcuador();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'SEN': {
      let { country: resultCountry, members: resultMembers } =
        await setUpSenegal();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'NED': {
      let { country: resultCountry, members: resultMembers } =
        await setUpNetherlands();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'ENG': {
      let { country: resultCountry, members: resultMembers } =
        await setUpEngland();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'IRN': {
      let { country: resultCountry, members: resultMembers } =
        await setUpIran();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'USA': {
      let { country: resultCountry, members: resultMembers } =
        await setUpUnitedStates();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'WAL': {
      let { country: resultCountry, members: resultMembers } =
        await setUpWales();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    default:
      return { error: 'Unexpected Code' };
  }
  return { team: { country, members } };
};

export const setUp2022Teams = async () => {
  // Group A
  await setUpQatar();
  await setUpEcuador();
  await setUpSenegal();
  await setUpNetherlands();

  // Group B
  await setUpEngland();
  await setUpIran();
  await setUpUnitedStates();
  await setUpWales();

  // Group C

  // Group D

  // Group E

  // Group F
};
