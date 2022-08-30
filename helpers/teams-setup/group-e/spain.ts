import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpSpain = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'ESP', name: 'Spain' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Spain Shield', //1
    'Unai Simón', //2
    'Robert Sánchez', //3
    'César Azpilicueta', //4
    'Eric García', //5
    'Jordi Alba', //6
    'Aymeric Laporte', //7
    'Pau Torres', //8
    'Gavi', //9
    'Koke', //10
    'Marcos Llorente', //11
    'Pedri', //12
    'Rodri', //13
    'Sergio Busquets', //14
    'Dani Olmo', //15
    'Ansu Fati', //16
    'Ferran Torres', //17
    'Álvaro Morata', //18
    'Pablo Sarabia', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
