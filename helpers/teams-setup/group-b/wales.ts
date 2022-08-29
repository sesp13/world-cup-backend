import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpWales = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'WAL', name: 'Wales' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Wales Shield', //1
    'Danny Ward', //2
    'Wayne Hennessey', //3
    'Ethan Ampadu', //4
    'Ben Davies', //5
    'Chris Gunter', //6
    'Chris Mepham', //7
    'Connor Roberts', //8
    'Joe Rodon', //9
    'Neco Williams', //10
    'Joe Allen', //11
    'Joe Morrell', //12
    'Aaron Ramsey', //13
    'Jonathan Williams', //14
    'Harry Wilson', //15
    'Gareth Bale', //16
    'Daniel James', //17
    'Brennan Johnson', //18
    'Kieffer Moore', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
