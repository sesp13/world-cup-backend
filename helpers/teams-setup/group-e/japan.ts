import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpJapan = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'JPN', name: 'Japan' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Japan Shield', //1
    'Shuichi Gonda', //2
    'Eiji Kawashima', //3
    'Yuto Nagatomo', //4
    'Yuta Nakayama', //5
    'Takehiro Tomiyasu', //6
    'Miki Yamane', //7
    'Maya Yoshida', //8
    'Wataru Endo', //9
    'Genki Haraguchi', //10
    'Hidemasa Morita', //11
    'Gaku Shibasaki', //12
    'Ao Tanaka', //13
    'Takuma Asano', //14
    'Kyogo Furuhashi', //15
    'Junya Ito', //16
    'Takumi Minamino', //17
    'Kaoru Mitoma', //18
    'Yuya Osako', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
