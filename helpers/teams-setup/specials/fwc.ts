import { FullTeam } from '../../../interfaces/fullTeam';
import { Group, IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMember } from '../setUpHelpers';

export const setUpFWC = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'FWC', name: 'FWC' };

  const group = await Group.findOneAndUpdate(
    {
      code: countryData.code,
    },
    countryData,
    {
      new: true,
      upsert: true,
    }
  );

  const members: IMetaSticker[] = [];

  // Members
  const member00 = await createMember({
    code: `00`,
    name: 'Panini Logo: sticker 00',
    groupId: group._id,
  });
  members.push(member00);

  const member1 = await createMember({
    code: `${countryData.code} 1`,
    name: 'FWC shield',
    groupId: group._id,
  });
  members.push(member1);

  const member2 = await createMember({
    code: `${countryData.code} 2`,
    name: 'FWC Member 2',
    groupId: group._id,
  });
  members.push(member2);

  const member3 = await createMember({
    code: `${countryData.code} 3`,
    name: 'FWC Member 3',
    groupId: group._id,
  });
  members.push(member3);

  const member4 = await createMember({
    code: `${countryData.code} 4`,
    name: 'FWC Member 4',
    groupId: group._id,
  });
  members.push(member4);

  const member5 = await createMember({
    code: `${countryData.code} 5`,
    name: 'FWC Member 5',
    groupId: group._id,
  });
  members.push(member5);

  const member6 = await createMember({
    code: `${countryData.code} 6`,
    name: 'FWC Member 6',
    groupId: group._id,
  });
  members.push(member6);

  const member7 = await createMember({
    code: `${countryData.code} 7`,
    name: 'FWC Member 7',
    groupId: group._id,
  });
  members.push(member7);

  const member8 = await createMember({
    code: `${countryData.code} 8`,
    name: 'FWC Member 8',
    groupId: group._id,
  });
  members.push(member8);

  const member9 = await createMember({
    code: `${countryData.code} 9`,
    name: 'FWC Member 9',
    groupId: group._id,
  });
  members.push(member9);

  const member10 = await createMember({
    code: `${countryData.code} 10`,
    name: 'FWC Member 10',
    groupId: group._id,
  });
  members.push(member10);

  const member11 = await createMember({
    code: `${countryData.code} 11`,
    name: 'FWC Member 11',
    groupId: group._id,
  });
  members.push(member11);

  const member12 = await createMember({
    code: `${countryData.code} 12`,
    name: 'FWC Member 12',
    groupId: group._id,
  });
  members.push(member12);

  const member13 = await createMember({
    code: `${countryData.code} 13`,
    name: 'FWC Member 13',
    groupId: group._id,
  });
  members.push(member13);

  const member14 = await createMember({
    code: `${countryData.code} 14`,
    name: 'FWC Member 14',
    groupId: group._id,
  });
  members.push(member14);

  const member15 = await createMember({
    code: `${countryData.code} 15`,
    name: 'FWC Member 15',
    groupId: group._id,
  });
  members.push(member15);

  const member16 = await createMember({
    code: `${countryData.code} 16`,
    name: 'FWC Member 16',
    groupId: group._id,
  });
  members.push(member16);

  const member17 = await createMember({
    code: `${countryData.code} 17`,
    name: 'FWC Member 17',
    groupId: group._id,
  });
  members.push(member17);

  const member18 = await createMember({
    code: `${countryData.code} 18`,
    name: 'FWC Member 18',
    groupId: group._id,
  });
  members.push(member18);

  const member19 = await createMember({
    code: `${countryData.code} 19`,
    name: 'FWC Member 19',
    groupId: group._id,
  });
  members.push(member19);

  const member20 = await createMember({
    code: `${countryData.code} 20`,
    name: 'FWC Member 20',
    groupId: group._id,
  });
  members.push(member20);

  const member21 = await createMember({
    code: `${countryData.code} 21`,
    name: 'FWC Member 21',
    groupId: group._id,
  });
  members.push(member2);

  const member22 = await createMember({
    code: `${countryData.code} 22`,
    name: 'FWC Member 22',
    groupId: group._id,
  });
  members.push(member22);

  const member23 = await createMember({
    code: `${countryData.code} 23`,
    name: 'FWC Member 23',
    groupId: group._id,
  });
  members.push(member23);

  const member24 = await createMember({
    code: `${countryData.code} 24`,
    name: 'FWC Member 24',
    groupId: group._id,
  });
  members.push(member24);

  const member25 = await createMember({
    code: `${countryData.code} 25`,
    name: 'FWC Member 25',
    groupId: group._id,
  });
  members.push(member25);

  const member26 = await createMember({
    code: `${countryData.code} 26`,
    name: 'FWC Member 26',
    groupId: group._id,
  });
  members.push(member26);

  const member27 = await createMember({
    code: `${countryData.code} 27`,
    name: 'FWC Member 27',
    groupId: group._id,
  });
  members.push(member27);

  const member28 = await createMember({
    code: `${countryData.code} 28`,
    name: 'FWC Member 28',
    groupId: group._id,
  });
  members.push(member28);

  const member29 = await createMember({
    code: `${countryData.code} 29`,
    name: 'FWC Member 29',
    groupId: group._id,
  });
  members.push(member29);

  return { country: group, members };
};
