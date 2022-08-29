import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import {
  createMemberSet,
  createSetUpGroup,
} from '../setUpHelpers';

export const setUpNetherlands = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'NED', name: 'Netherlands' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Netherlands logo', //1 
    'Justin Bijlow', //2 
    'Jasper Cillessen', //3 
    'Daley Blind', //4 
    'Matthijs de Ligt', //5 
    'Stefan de Vrij', //6 
    'Denzel Dumfries', //7 
    'Virgil van Dijk', //8 
    'Steven Berghuis', //9 
    'Frenkie de Jong', //10 
    'Ryan Gravenberch', //11 
    'Davy Klaassen', //12 
    'Teun Koopmeiners', //13 
    'Georginio Wijnaldum', //14 
    'Steven Bergwijn', //15 
    'Arnaut Danjuma', //16 
    'Memphis Depay', //17 
    'Cody Gakpo', //18 
    'Donyell Malen', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
