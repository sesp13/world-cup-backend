import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpArgentina = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'ARG', name: 'Argentina' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Argentina Shield', //1 
    'Emiliano Martínez', //2 
    'Franco Armani', //3 
    'Marcos Acuña', //4 
    'Nahuel Molina', //5 
    'Nicolás Otamendi', //6 
    'Germán Pezzella', //7 
    'Cristian Romero', //8 
    'Rodrigo De Paul', //9 
    'Ángel Di María', //10 
    'Giovani Lo Celso', //11 
    'Leandro Paredes', //12 
    'Guido Rodríguez', //13 
    'Julián Álvarez', //14 
    'Joaquín Correa', //15 
    'Alejandro Gómez', //16 
    'Nicolás González', //17 
    'Lautaro Martínez', //18 
    'Lionel Messi', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
