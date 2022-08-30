import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpBrazil = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'BRA', name: 'Brazil' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Brazil Shield', //1
    'Alisson', //2
    'Ederson', //3
    'Alex Sandro', //4
    'Danilo', //5
    'Éder Militão', //6
    'Marquinhos', //7
    'Thiago Silva', //8
    'Casemiro', //9
    'Philippe Coutinho', //10
    'Fabinho', //11
    'Fred', //12
    'Lucas Paquetá', //13
    'Antony', //14
    'Gabriel Jesus', //15
    'Neymar Jr', //16
    'Raphinha', //17
    'Richarlison', //18
    'Vinícius Jr', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
