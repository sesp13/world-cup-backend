import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpIran = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'IRN', name: 'Iran' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Iran Shield', //1 
    'Amir Abedzadeh', //2 
    'Alireza Beiranvand', //3 
    'Ehsan Hajsafi', //4 
    'Majid Hosseini', //5 
    'Hossein Kanaani', //6 
    'Shoja Khalilzadeh', //7 
    'Milad Mohammadi', //8 
    'Sadegh Moharrami', //9 
    'Omid Noorafkan', //10 
    'Vahid Amiri', //11 
    'Saeid Ezatolahi', //12 
    'Ali Gholizadeh', //13 
    'Alireza Jahanbakhsh', //14 
    'Ahmad Nourollahi', //15 
    'Karim Ansarifard', //16 
    'Sardar Azmoun', //17 
    'Saman Ghoddos', //18 
    'Mehdi Taremi', //19|
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
