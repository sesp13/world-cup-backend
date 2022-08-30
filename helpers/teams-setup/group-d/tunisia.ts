import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpTunisia = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'TUN', name: 'Tunisia' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Tunisia Shield', //1
    'Bechir Ben Saïd', //2
    'Farouk Ben Mustapha', //3
    'Dylan Bronn', //4
    'Mohamed Dräger', //5
    'Bilel Ifa', //6
    'Ali Maâloul', //7
    'Hamza Mathlouthi', //8
    'Yassine Meriah', //9
    'Montassar Talbi', //10
    'Mohamed Ali Ben Romdhane', //11
    'Wahbi Khazri', //12
    'Aïssa Laïdouni', //13
    'Ferjani Sassi', //14
    'Ellyes Skhiri', //15
    'Anis Slimane', //16
    'Seifeddine Jaziri', //17
    'Youssef Msakni', //18
    'Naïm Sliti', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
