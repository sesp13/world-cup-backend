import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpGermany = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'GER', name: 'Germany' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Germany shield', //1
    'Manuel Neuer', //2
    'Marc-André ter Stegen', //3
    'Matthias Ginter', //4
    'Robin Gosens', //5
    'Thilo Kehrer', //6
    'David Raum', //7
    'Antonio Rüdiger', //8
    'Niklas Süle', //9
    'Leon Goretzka', //10
    'İlkay Gündoğan', //11
    'Kai Havertz', //12
    'Jonas Hofmann', //13
    'Joshua Kimmich', //14
    'Serge Gnabry', //15
    'Thomas Müller', //16
    'Marco Reus', //17
    'Leroy Sané', //18
    'Timo Werner', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
