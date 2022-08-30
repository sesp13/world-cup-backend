import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpSwitzerland = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'SUI', name: 'Switzerland' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Switzerland Shield', //1 
    'Yann Sommer', //2 
    'Gregor Kobel', //3 
    'Manuel Akanji', //4 
    'Nico Elvedi', //5 
    'Kevin Mbabu', //6 
    'Ricardo Rodríguez', //7 
    'Fabian Schär', //8 
    'Silvan Widmer', //9 
    'Remo Freuler', //10 
    'Xherdan Shaqiri', //11 
    'Djibril Sow', //12 
    'Granit Xhaka', //13 
    'Denis Zakaria', //14 
    'Steven Zuber', //15 
    'Breel Embolo', //16 
    'Noah Okafor', //17 
    'Haris Seferović', //18 
    'Ruben Vargas', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
