import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpCanada = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'CAN', name: 'Canada' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Canada Shield', //1
    'Milan Borjan', //2
    'Maxime Crépeau', //3
    'Samuel Adekugbe', //4
    'Doneil Henry', //5
    'Alistair Johnston', //6
    'Richie Laryea', //7
    'Kamal Miller', //8
    'Steven Vitória', //9
    'Tajon Buchanan', //10
    'Alphonso Davies', //11
    'Stephen Eustáquio', //12
    'Atiba Hutchinson', //13
    'Mark-Anthony Kaye', //14
    'Jonathan Osorio', //15
    'Samuel Piette', //16
    'Jonathan David', //17
    'David Junior Hoilett', //18
    'Cyle Larin', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
