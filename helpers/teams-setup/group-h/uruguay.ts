import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpUruguay = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'URU', name: 'Uruguay' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Uruguay shield', //1 
    'Fernando Muslera', //2 
    'Sergio Rochet', //3 
    'Ronald Araújo', //4 
    'Martín Cáceres', //5 
    'José María Giménez', //6 
    'Diego Godín', //7 
    'Mathías Olivera', //8 
    'Matías Viña', //9 
    'Rodrigo Bentancur', //10 
    'Giorgian De Arrascaeta', //11 
    'Nicolás De La Cruz', //12 
    'Lucas Torreira', //13 
    'Federico Valverde', //14 
    'Matías Vecino', //15 
    'Edinson Cavani', //16 
    'Darwin Núñez', //17 
    'Facundo Pellistri', //18 
    'Luis Suárez', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
