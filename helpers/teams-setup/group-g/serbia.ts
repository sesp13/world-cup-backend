import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpSerbia = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'SRB', name: 'Serbia' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Serbia shield', //1
    'Predrag Rajković', //2
    'Vanja Milinković-Savić', //3
    'Nikola Milenković', //4
    'Strahinja Pavlović', //5
    'Miloš Veljković', //6
    'Filip Đuričić', //7
    'Nemanja Gudelj', //8
    'Filip Kostić', //9
    'Darko Lazović', //10
    'Saša Lukić', //11
    'Nemanja Maksimović', //12
    'Sergej Milinković-Savić', //13
    'Nemanja Radonjić', //14
    'Andrija Živković', //15
    'Luka Jović', //16
    'Aleksandar Mitrović', //17
    'Dušan Tadić', //18
    'Dušan Vlahović', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
