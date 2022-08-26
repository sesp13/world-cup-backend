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
  setUpArgentina,
  setUpSaudiArabia,
  setUpMexico,
  setUpPoland,
  setUpFrance,
  setUpAustralia,
  setUpDenmark,
  setUpTunisia,
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
    case 'ARG': {
      let { country: resultCountry, members: resultMembers } =
        await setUpArgentina();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'KSA': {
      let { country: resultCountry, members: resultMembers } =
        await setUpSaudiArabia();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'MEX': {
      let { country: resultCountry, members: resultMembers } =
        await setUpMexico();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'POL': {
      let { country: resultCountry, members: resultMembers } =
        await setUpPoland();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'FRA': {
      let { country: resultCountry, members: resultMembers } =
        await setUpFrance();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'AUS': {
      let { country: resultCountry, members: resultMembers } =
        await setUpAustralia();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'DEN': {
      let { country: resultCountry, members: resultMembers } =
        await setUpDenmark();
      country = resultCountry;
      members = resultMembers;
      break;
    }
    case 'TUN': {
      let { country: resultCountry, members: resultMembers } =
        await setUpTunisia();
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
  await setUpArgentina();
  await setUpSaudiArabia();
  await setUpMexico();
  await setUpPoland();
  
  // Group D
  await setUpFrance();
  await setUpAustralia();
  await setUpDenmark();
  await setUpTunisia();
  
  // Group E

  // Group F
};
