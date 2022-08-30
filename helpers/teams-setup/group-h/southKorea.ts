import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpSouthKorea = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'KOR', name: 'South Korea' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'South Korea Shield', //1 
    'Seung-gyu Kim', //2 
    'Hyeon-woo Jo', //3 
    'Chul Hong', //4 
    'Tae-hwan Kim', //5 
    'Min-jae Kim', //6 
    'Young-gwon Kim', //7 
    'Jin-su Kim', //8 
    'Yong Lee', //9 
    'In-beom Hwang', //10 
    'Woo-young Jung', //11 
    'Jae-sung Lee', //12 
    'Seung-ho Paik', //13 
    'Gue-sung Cho', //14 
    'Hee-chan Hwang', //15 
    'Ui-jo Hwang', //16 
    'Chang-hoon Kwon', //17 
    'Heung-min Son', //18 
    'Min-kyu Song', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
