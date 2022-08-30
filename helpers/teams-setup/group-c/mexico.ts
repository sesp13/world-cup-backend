import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpMexico = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'MEX', name: 'Mexico' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Mexico Shield', //1
    'Guillermo Ochoa', //2
    'Alfredo Talavera', //3
    'Néstor Araújo', //4
    'Jesús Gallardo', //5
    'César Montes', //6
    'Héctor Moreno', //7
    'Luis Romo', //8
    'Jorge Sánchez', //9
    'Edson Álvarez', //10
    'Jesús Manuel Corona', //11
    'Andrés Guardado', //12
    'Érick Gutiérrez', //13
    'Héctor Herrera', //14
    'Diego Lainez', //15
    'Carlos Rodríguez', //16
    'Rogelio Funes Mori', //17
    'Raúl Jiménez', //18
    'Hirving Lozano', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
