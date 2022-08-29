import { Group, IGroup } from '../../models/group';
import { IMetaSticker, MetaSticker } from '../../models/metaSticker';

export const createSetUpGroup = async (data: IGroup): Promise<IGroup> =>
  await Group.findOneAndUpdate(
    {
      code: data.code,
    },
    data,
    {
      new: true,
      upsert: true,
    }
  );

export const createMember = async (
  structure: IMetaSticker
): Promise<IMetaSticker> => {
  return await MetaSticker.findOneAndUpdate(
    { code: structure.code },
    structure,
    { new: true, upsert: true }
  );
};

export const createMemberSet = async (param: {
  names: string[];
  group: IGroup;
}): Promise<IMetaSticker[]> => {
  const resultSet: IMetaSticker[] = [];
  const { names, group } = param;

  for (let i = 0; i < 19; i++) {
    const name = names[i];
    const stickerNumber = i + 1;
    const member = await createMember({
      code: `${group.code} ${stickerNumber}`,
      name,
      groupId: group._id!,
    });
    resultSet.push(member);
  }
  return resultSet;
};
