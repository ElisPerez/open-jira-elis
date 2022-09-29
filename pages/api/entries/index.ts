import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { EntryModel, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    default:
      return res.status(400).json({ message: 'Endpoint not found Elis' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connet();

  // Interaction with the database
  const entries = await EntryModel.find().sort({ createdAt: 'ascending' }); // sort: to order the results according to the specified property.

  await db.disconnect();

  res.status(200).json(entries);
};
