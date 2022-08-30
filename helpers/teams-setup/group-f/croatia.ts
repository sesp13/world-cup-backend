import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpCroatia = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'CRO', name: 'Croatia' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Croatia Shield', //1 
    'Dominik Livaković', //2 
    'Ivica Ivušić', //3 
    'Duje Ćaleta-Car', //4 
    'Joško Gvardiol', //5 
    'Josip Juranović', //6 
    'Dejan Lovren', //7 
    'Borna Sosa', //8 
    'Domagoj Vida', //9 
    'Marcelo Brozović', //10 
    'Mateo Kovačić', //11 
    'Luka Modrić', //12 
    'Mario Pašalić', //13 
    'Ivan Perišić', //14 
    'Nikola Vlašić', //15 
    'Josip Brekalo', //16 
    'Andrej Kramarić', //17 
    'Marko Livaja', //18 
    'Mislav Oršić', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
