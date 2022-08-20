import { Group, IGroup } from '../models/group';

const getGroupById = async (id: string): Promise<IGroup | null> =>
  await Group.findById(id);

const getGroupByCode = async (code: string): Promise<IGroup | null> =>
  await Group.findOne({ code });

export const groupExists = async (id: string): Promise<boolean> => {
  const group = await getGroupById(id);
  return group !== null ? true : false;
};

export const groupByCodeExists = async (code: string): Promise<boolean> => {
  const group = await getGroupByCode(code);
  return group !== null ? true : false;
};

// Check validators for routes

export const checkGroupExists = async (id: string) => {
  const exists = await groupExists(id);
  if (!exists) {
    throw new Error(`The group with id ${id} doesn't exists`);
  }
};

export const checkAvailableGroupCode = async (code: string) => {
  const exists = await groupByCodeExists(code);
  if (exists) throw new Error(`The group with code ${code} already exists`);
};
