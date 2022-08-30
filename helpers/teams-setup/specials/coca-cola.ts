import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpCocacola = async (): Promise<FullTeam> => {
  const groupData: IGroup = { code: 'COCA', name: 'Cocacola' };

  const country = await createSetUpGroup(groupData);

  const memberNames = [
    'Serge Gnabry', //1
    'Emiliano Martínez', //2
    'Kevin De Bruyne', //3
    'Luka Modrić', //4
    'Declan Rice', //5
    'Gavi', //6
    'Hirving Lozano', //7
    'Heung-min Son', //8
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
