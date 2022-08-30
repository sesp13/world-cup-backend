import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpGhana = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'GHA', name: 'Ghana' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Ghana shield', //1 
    'Joe Wollacott', //2 
    'Richard Ofori', //3 
    'Daniel Amartey', //4 
    'Abdul-Rahman Baba', //5 
    'Alexander Djiku', //6 
    'Gideon Mensah', //7 
    'Jonathan Mensah', //8 
    'Andy Yiadom', //9 
    'Iddrisu Baba', //10 
    'Mohammed Kudus', //11 
    'Daniel-Kofi Kyereh', //12 
    'Thomas Partey', //13 
    'Mubarak Wakaso', //14 
    'Felix Afena-Gyan', //15 
    'André Ayew', //16 
    'Jordan Ayew', //17 
    'Issahaku Abdul Fatawu', //18 
    'Kamaldeen Sulemana', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
