import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpEngland = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'ENG', name: 'England' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'England Shield', //1 
    'Jordan Pickford', //2 
    'Aaron Ramsdale', //3 
    'Trent Alexander-Arnold', //4 
    'Conor Coady', //5 
    'Harry Maguire', //6 
    'Luke Shaw', //7 
    'John Stones', //8 
    'Kyle Walker', //9 
    'Jude Bellingham', //10 
    'Jack Grealish', //11 
    'Jordan Henderson', //12 
    'Mason Mount', //13 
    'Kalvin Phillips', //14 
    'Declan Rice', //15 
    'Phil Foden', //16 
    'Harry Kane', //17 
    'Bukayo Saka', //18 
    'Raheem Sterling', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
