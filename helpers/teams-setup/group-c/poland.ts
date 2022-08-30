import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpPoland = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'POL', name: 'Poland' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Poland Shield', //1
    'Wojciech Szczęsny', //2
    'Łukasz Skorupski', //3
    'Jan Bednarek', //4
    'Bartosz Bereszyński', //5
    'Matty Cash', //6
    'Kamil Glik', //7
    'Tymoteusz Puchacz', //8
    'Maciej Rybus', //9
    'Kamil Jóźwiak', //10
    'Mateusz Klich', //11
    'Grzegorz Krychowiak', //12
    'Jakub Moder', //13
    'Sebastian Szymański', //14
    'Piotr Zieliński', //15
    'Robert Lewandowski', //16
    'Arkadiusz Milik', //17
    'Krzysztof Piątek', //18
    'Karol Świderski', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
