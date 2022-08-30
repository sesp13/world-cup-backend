import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpPortugal = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'POR', name: 'Portugal' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Portugal Shield', //1
    'Diogo Costa', //2
    'Rui Patrício', //3
    'João Cancelo', //4
    'José Fonte', //5
    'Nuno Mendes', //6
    'Pepe', //7
    'Raphaël Guerreiro', //8
    'Rúben Dias', //9
    'Bernardo Silva', //10
    'Bruno Fernandes', //11
    'Danilo Pereira', //12
    'João Moutinho', //13
    'Renato Sanches', //14
    'Rúben Neves', //15
    'André Silva', //16
    'Cristiano Ronaldo', //17
    'Diogo Jota', //18
    'Gonçalo Guedes', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
