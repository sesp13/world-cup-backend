import { FullTeam } from '../../../interfaces/fullTeam';
import { IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMemberSet, createSetUpGroup } from '../setUpHelpers';

export const setUpAustralia = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'AUS', name: 'Australia' };

  const country = await createSetUpGroup(countryData);

  const memberNames = [
    'Australia shield', //1
    'Mathew Ryan', //2
    'Andrew Redmayne', //3
    'Aziz Behich', //4
    'Miloš Degenek', //5
    'Rhyan Grant', //6
    'Joel King', //7
    'Trent Sainsbury', //8
    'Harry Souttar', //9
    'Ajdin Hrustić', //10
    'Jackson Irvine', //11
    'James Jeggo', //12
    'Awer Mabil', //13
    'Aaron Mooy', //14
    'Martin Boyle', //15
    'Mitchell Duke', //16
    'Craig Goodwin', //17
    'Mathew Leckie', //18
    'Adam Taggart', //19
  ];

  const members: IMetaSticker[] = await createMemberSet({
    names: memberNames,
    group: country,
  });

  return { country, members };
};
