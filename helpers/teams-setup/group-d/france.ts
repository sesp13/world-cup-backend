import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpFrance = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'FRA', name: 'France' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'France shield', //1
    'Hugo Lloris', //2
    'Mike Maignan', //3
    'Lucas Hernández', //4
    'Theo Hernández', //5
    'Presnel Kimpembe', //6
    'Jules Koundé', //7
    'Benjamin Pavard', //8
    'Raphaël Varane', //9
    'N’Golo Kanté', //10
    'Paul Pogba', //11
    'Adrien Rabiot', //12
    'Aurélien Tchouaméni', //13
    'Wissam Ben Yedder', //14
    'Karim Benzema', //15
    'Kingsley Coman', //16
    'Antoine Griezmann', //17
    'Kylian Mbappé', //18
    'Christopher Nkunku', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
