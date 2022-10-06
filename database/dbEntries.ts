import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { EntryModel, IEntry } from '../models';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connet();

  const entry = await EntryModel.findById(id).lean(); // With "lean()" it brings the minimum functions to avoid bringing unnecessary information.

  await db.disconnect()

  // Solucion para serializar _id: ObjectID("633c7b7dce1efb60af2d384b") a _id: "633c7b7dce1efb60af2d384b":
  return JSON.parse(JSON.stringify(entry));

};
