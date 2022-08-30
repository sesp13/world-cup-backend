import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpCameroon = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'CMR', name: 'Cameroon' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Cameroon Shield', //1
    'André Onana', //2
    'Devis Epassy', //3
    'Jean-Charles Castelletto', //4
    'Collins Fai', //5
    'Olivier Mbaizo', //6
    'Harold Moukoudi', //7
    'Michael Ngadeu', //8
    'Nouhou', //9
    'Martin Hongla', //10
    'Pierre Kunde', //11
    'James Léa Siliki', //12
    'Samuel Oum Gouet', //13
    'André-Frank Zambo Anguissa', //14
    'Vincent Aboubakar', //15
    'Stéphane Bahoken', //16
    'Eric Maxim Choupo-Moting', //17
    'Nicolas Moumi Ngamaleu', //18
    'Karl Toko Ekambi', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
