import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpEcuador = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'ECU', name: 'Ecuador' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Ecuador Shield', //1 
    'Hernán Galíndez', //2 
    'Alexander Domínguez', //3 
    'Robert Arboleda', //4 
    'Byron Castillo', //5 
    'Pervis Estupiñán', //6 
    'Piero Hincapié', //7 
    'Ángelo Preciado', //8 
    'Félix Torres', //9 
    'Moisés Caicedo', //10 
    'Alan Franco', //11 
    'Carlos Gruezo', //12 
    'Jhegson Méndez', //13 
    'Jeremy Sarmiento', //14 
    'Michael Estrada', //15 
    'Ángel Mena', //16 
    'Gonzalo Plata', //17 
    'Ayrton Preciado', //18 
    'Enner Valencia', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
