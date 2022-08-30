import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpCostaRica = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'CRC', name: 'Costa Rica' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Costa Rica Shield', //1
    'Keylor Navas', //2
    'Leonel Moreira', //3
    'Ricardo Blanco', //4
    'Francisco Calvo', //5
    'Óscar Duarte', //6
    'Keysher Fuller', //7
    'Bryan Oviedo', //8
    'Juan Pablo Vargas', //9
    'Kendall Waston', //10
    'Celso Borges', //11
    'Orlando Galo', //12
    'Bryan Ruiz', //13
    'Yeltsin Tejeda', //14
    'Jewison Bennette', //15
    'Joel Campbell', //16
    'Anthony Contreras', //17
    'Gerson Torres', //18
    'Johan Venegas', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
