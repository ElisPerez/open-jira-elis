import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { EntryModel, IEntry } from '../models';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connet();

  const entry = await EntryModel.findById(id).lean(); // With "lean()" it brings the minimum functions to avoid bringing unnecessary information.

  await db.disconnect()

  return entry;

};
