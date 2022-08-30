import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMember,
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpFWC = async (): Promise<FullTeam> => {
  const groupData: IGroup = { code: 'FWC', name: 'FWC' };

  const group = await createSetUpGroup(groupData);

  const memberNames = [
    'FIFA', //1
    'Official Trophy FOIL', //2
    'Official Trophy FOIL', //3
    'Official Mascot FOIL', //4
    'Official Mascot FOIL', //5
    'Official Emblem FOIL', //6
    'Official Emblem FOIL', //7
    'Ahmad Bin Ali Stadium', //8
    'Al Janoub Stadium', //9
    'Al Thumama Stadium', //10
    'Education City Stadium', //11
    'Khalifa International Stadium', //12
    'Stadium 974', //13
    'Al Bayt Stadium outdoor', //14
    'Al Bayt Stadium indoor', //15
    'Lusail Stadium outdoor', //16
    'Lusail Stadium indoor', //17
    'Official Match Ball', //18
    'Champion Uruguay 1930', //19
    'Champion Italy 1938', //20
    'Champion Brazil 1958', //21
    'Champion England 1966', //22
    'Champion Brazil 1970', //23
    'Champion Argentina 1978', //24
    'Champion Italy 1982', //25
    'Champion Germany 1990', //26
    'Champion France 1998', //27
    'Champion Spain 2010', //28
    'Champion France 2018', //29
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: group,
  });

  // 00 Special sticker
  const member00 = await createMember({
    code: `00`,
    name: 'Panini Logo: sticker 00',
    groupId: group._id!,
  });
  members.push(member00);

  return { country: group, members };
};
