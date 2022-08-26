import { FullTeam } from '../../../interfaces/fullTeam';
import { Group, IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createPlayer } from '../setUpHelpers';

export const setUpCanada = async (): Promise<FullTeam> => {
  const countryData: IGroup = { code: 'CAN', name: 'Canada' };

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
  const member1 = await createPlayer({
    code: `${countryData.code} 1`,
    name: 'Canada shield',
    groupId: country._id,
  });
  members.push(member1);

  const member2 = await createPlayer({
    code: `${countryData.code} 2`,
    name: 'Canada Member 2',
    groupId: country._id,
  });
  members.push(member2);
  
  const member3 = await createPlayer({
    code: `${countryData.code} 3`,
    name: 'Canada Member 3',
    groupId: country._id,
  });
  members.push(member3);

  const member4 = await createPlayer({
    code: `${countryData.code} 4`,
    name: 'Canada Member 4',
    groupId: country._id,
  });
  members.push(member4);

  const member5 = await createPlayer({
    code: `${countryData.code} 5`,
    name: 'Canada Member 5',
    groupId: country._id,
  });
  members.push(member5);

  const member6 = await createPlayer({
    code: `${countryData.code} 6`,
    name: 'Canada Member 6',
    groupId: country._id,
  });
  members.push(member6);

  const member7 = await createPlayer({
    code: `${countryData.code} 7`,
    name: 'Canada Member 7',
    groupId: country._id,
  });
  members.push(member7);
  
  const member8 = await createPlayer({
    code: `${countryData.code} 8`,
    name: 'Canada Member 8',
    groupId: country._id,
  });
  members.push(member8);

  const member9 = await createPlayer({
    code: `${countryData.code} 9`,
    name: 'Canada Member 9',
    groupId: country._id,
  });
  members.push(member9);

  const member10 = await createPlayer({
    code: `${countryData.code} 10`,
    name: 'Canada Member 10',
    groupId: country._id,
  });
  members.push(member10);

  const member11 = await createPlayer({
    code: `${countryData.code} 11`,
    name: 'Canada Member 11',
    groupId: country._id,
  });
  members.push(member11);

  const member12 = await createPlayer({
    code: `${countryData.code} 12`,
    name: 'Canada Member 12',
    groupId: country._id,
  });
  members.push(member12);
  
  const member13 = await createPlayer({
    code: `${countryData.code} 13`,
    name: 'Canada Member 13',
    groupId: country._id,
  });
  members.push(member13);

  const member14 = await createPlayer({
    code: `${countryData.code} 14`,
    name: 'Canada Member 14',
    groupId: country._id,
  });
  members.push(member14);

  const member15 = await createPlayer({
    code: `${countryData.code} 15`,
    name: 'Canada Member 15',
    groupId: country._id,
  });
  members.push(member15);

  const member16 = await createPlayer({
    code: `${countryData.code} 16`,
    name: 'Canada Member 16',
    groupId: country._id,
  });
  members.push(member16);

  const member17 = await createPlayer({
    code: `${countryData.code} 17`,
    name: 'Canada Member 17',
    groupId: country._id,
  });
  members.push(member17);

  const member18 = await createPlayer({
    code: `${countryData.code} 18`,
    name: 'Canada Member 18',
    groupId: country._id,
  });
  members.push(member18);

  const member19 = await createPlayer({
    code: `${countryData.code} 19`,
    name: 'Canada Member 19',
    groupId: country._id,
  });
  members.push(member19);

  const member20 = await createPlayer({
    code: `${countryData.code} 20`,
    name: 'Canada Member 20',
    groupId: country._id,
  });
  members.push(member20);

  return { country, members };
};
