import { FullTeam } from '../../../interfaces/fullTeam';
import { Group, IGroup } from '../../../models/group';
import { IMetaSticker } from '../../../models/metaSticker';
import { createMember } from '../setUpHelpers';

export const setUpCocacola = async (): Promise<FullTeam> => {
  const groupData: IGroup = { code: 'COCA', name: 'Cocacola' };

  const group = await Group.findOneAndUpdate(
    {
      code: groupData.code,
    },
    groupData,
    {
      new: true,
      upsert: true,
    }
  );

  const members: IMetaSticker[] = [];

  // Players
  const member1 = await createMember({
    code: `${groupData.code} 1`,
    name: 'Cocacola shield',
    groupId: group._id,
  });
  members.push(member1);

  const member2 = await createMember({
    code: `${groupData.code} 2`,
    name: 'Cocacola Member 2',
    groupId: group._id,
  });
  members.push(member2);
  
  const member3 = await createMember({
    code: `${groupData.code} 3`,
    name: 'Cocacola Member 3',
    groupId: group._id,
  });
  members.push(member3);

  const member4 = await createMember({
    code: `${groupData.code} 4`,
    name: 'Cocacola Member 4',
    groupId: group._id,
  });
  members.push(member4);

  const member5 = await createMember({
    code: `${groupData.code} 5`,
    name: 'Cocacola Member 5',
    groupId: group._id,
  });
  members.push(member5);

  const member6 = await createMember({
    code: `${groupData.code} 6`,
    name: 'Cocacola Member 6',
    groupId: group._id,
  });
  members.push(member6);

  const member7 = await createMember({
    code: `${groupData.code} 7`,
    name: 'Cocacola Member 7',
    groupId: group._id,
  });
  members.push(member7);
  
  const member8 = await createMember({
    code: `${groupData.code} 8`,
    name: 'Cocacola Member 8',
    groupId: group._id,
  });
  members.push(member8);

  return { country: group, members };
};
