import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '../../database';
import { EntryModel } from '../../models';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'PERMISSION DENIED (Elis)' });
  }

  await db.connet();

  // Interaction with the database
  await EntryModel.deleteMany();
  await EntryModel.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({ message: 'Process completed successfully' });
}
