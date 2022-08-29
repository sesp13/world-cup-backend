import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpQatar = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'QAT', name: 'Qatar' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Qatar shield', //1
    'Saad Al Sheeb', //2
    'Meshaal Barsham', //3
    'Homam Ahmed', //4
    'Bassam Alrawi', //5
    'Abdulkarim Hassan', //6
    'Musaab Khidir', //7
    'Boualem Khoukhi', //8
    'Pedro Miguel', //9
    'Tarek Salman', //10
    'Karim Boudiaf', //11
    'Abdulaziz Hatem', //12
    'Assim Omer Madibo', //13
    'Yousuf Abdurisag', //14
    'Akram Hassan Afif', //15
    'Ahmad Alaaeldin', //16
    'Hasan Al-Haydos', //17
    'Almoez Ali', //18
    'Mohammed Muntari', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
