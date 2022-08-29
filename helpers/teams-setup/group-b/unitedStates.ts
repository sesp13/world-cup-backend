import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpUnitedStates = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'USA', name: 'United States' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'United States Shield', //1
    'Matt Turner', //2
    'Zack Steffen', //3
    'Sergiño Dest', //4
    'Aaron Long', //5
    'Chris Richards', //6
    'Antonee Robinson', //7
    'DeAndre Yedlin', //8
    'Walker Zimmerman', //9
    'Brenden Aaronson', //10
    'Kellyn Acosta', //11
    'Tyler Adams', //12
    'Weston McKennie', //13
    'Yunus Musah', //14
    'Jesús Ferreira', //15
    'Ricardo Pepi', //16
    'Christian Pulisic', //17
    'Giovanni Reyna', //18
    'Timothy Weah', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
