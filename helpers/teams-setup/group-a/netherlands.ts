import { FullTeam } from '../../../interfaces/fullTeam';
import { Group, IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMember } from '../setUpHelpers';

export const setUpNetherlands = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'NED', name: 'Netherlands' };

  const country = await Group.findOneAndUpdate(
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

  // Players
  const member1 = await createMember({
    code: `${countryData.code} 1`,
    name: 'Netherlands shield',
    groupId: country._id,
  });
  members.push(member1);

  const member2 = await createMember({
    code: `${countryData.code} 2`,
    name: 'Netherlands Member 2',
    groupId: country._id,
  });
  members.push(member2);
  
  const member3 = await createMember({
    code: `${countryData.code} 3`,
    name: 'Netherlands Member 3',
    groupId: country._id,
  });
  members.push(member3);

  const member4 = await createMember({
    code: `${countryData.code} 4`,
    name: 'Netherlands Member 4',
    groupId: country._id,
  });
  members.push(member4);

  const member5 = await createMember({
    code: `${countryData.code} 5`,
    name: 'Netherlands Member 5',
    groupId: country._id,
  });
  members.push(member5);

  const member6 = await createMember({
    code: `${countryData.code} 6`,
    name: 'Netherlands Member 6',
    groupId: country._id,
  });
  members.push(member6);

  const member7 = await createMember({
    code: `${countryData.code} 7`,
    name: 'Netherlands Member 7',
    groupId: country._id,
  });
  members.push(member7);
  
  const member8 = await createMember({
    code: `${countryData.code} 8`,
    name: 'Netherlands Member 8',
    groupId: country._id,
  });
  members.push(member8);

  const member9 = await createMember({
    code: `${countryData.code} 9`,
    name: 'Netherlands Member 9',
    groupId: country._id,
  });
  members.push(member9);

  const member10 = await createMember({
    code: `${countryData.code} 10`,
    name: 'Netherlands Member 10',
    groupId: country._id,
  });
  members.push(member10);

  const member11 = await createMember({
    code: `${countryData.code} 11`,
    name: 'Netherlands Member 11',
    groupId: country._id,
  });
  members.push(member11);

  const member12 = await createMember({
    code: `${countryData.code} 12`,
    name: 'Netherlands Member 12',
    groupId: country._id,
  });
  members.push(member12);
  
  const member13 = await createMember({
    code: `${countryData.code} 13`,
    name: 'Netherlands Member 13',
    groupId: country._id,
  });
  members.push(member13);

  const member14 = await createMember({
    code: `${countryData.code} 14`,
    name: 'Netherlands Member 14',
    groupId: country._id,
  });
  members.push(member14);

  const member15 = await createMember({
    code: `${countryData.code} 15`,
    name: 'Netherlands Member 15',
    groupId: country._id,
  });
  members.push(member15);

  const member16 = await createMember({
    code: `${countryData.code} 16`,
    name: 'Netherlands Member 16',
    groupId: country._id,
  });
  members.push(member16);

  const member17 = await createMember({
    code: `${countryData.code} 17`,
    name: 'Netherlands Member 17',
    groupId: country._id,
  });
  members.push(member17);

  const member18 = await createMember({
    code: `${countryData.code} 18`,
    name: 'Netherlands Member 18',
    groupId: country._id,
  });
  members.push(member18);

  const member19 = await createMember({
    code: `${countryData.code} 19`,
    name: 'Netherlands Member 19',
    groupId: country._id,
  });
  members.push(member19);

  return { country, members };
};
