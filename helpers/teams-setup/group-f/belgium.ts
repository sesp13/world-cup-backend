import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpBelgium = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'BEL', name: 'Belgium' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Belgium Shield', //1 
    'Thibaut Courtois', //2 
    'Simon Mignolet', //3 
    'Toby Alderweireld', //4 
    'Timothy Castagne', //5 
    'Jason Denayer', //6 
    'Thomas Meunier', //7 
    'Jan Vertonghen', //8 
    'Yannick Carrasco', //9 
    'Kevin De Bruyne', //10 
    'Charles De Ketelaere', //11 
    'Thorgan Hazard', //12 
    'Youri Tielemans', //13 
    'Hans Vanaken', //14 
    'Axel Witsel', //15 
    'Jérémy Doku', //16 
    'Eden Hazard', //17 
    'Romelu Lukaku', //18 
    'Dries Mertens', //19 
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
