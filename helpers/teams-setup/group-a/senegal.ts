import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpSenegal = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'SEN', name: 'Senegal' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Senegal Shield', //1 
    'Édouard Mendy', //2 
    'Alfred Gomis', //3 
    'Saliou Ciss', //4 
    'Pape Abou Cissé', //5 
    'Abdou Diallo', //6 
    'Kalidou Koulibaly', //7 
    'Ibrahima Mbaye', //8 
    'Bouna Sarr', //9 
    'Krépin Diatta', //10 
    'Idrissa Gueye', //11 
    'Pape Gueye', //12 
    'Cheikhou Kouyaté', //13 
    'Nampalys Mendy', //14 
    'Boulaye Dia', //15 
    'Famara Diédhiou', //16 
    'Bamba Dieng', //17 
    'Sadio Mané', //18 
    'Ismaïla Sarr', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
