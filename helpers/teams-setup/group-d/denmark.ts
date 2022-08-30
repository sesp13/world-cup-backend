import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpDenmark = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'DEN', name: 'Denmark' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Denmark shield', //1
    'Kasper Schmeichel', //2
    'Frederik Rønnow', //3
    'Andreas Christensen', //4
    'Simon Kjær', //5
    'Joakim Mæhle', //6
    'Jens Stryger Larsen', //7
    'Jannik Vestergaard', //8
    'Mikkel Damsgaard', //9
    'Thomas Delaney', //10
    'Christian Eriksen', //11
    'Pierre Emile Højbjerg', //12
    'Christian Nørgaard', //13
    'Daniel Wass', //14
    'Martin Braithwaite', //15
    'Kasper Dolberg', //16
    'Yussuf Poulsen', //17
    'Andreas Skov Olsen', //18
    'Jonas Wind', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
