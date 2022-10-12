import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { EntryModel, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    case 'POST':
      return postEntry(req, res);

    default:
      return res.status(400).json({ message: 'Endpoint not found Elis' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  // Interaction with the database
  const entries = await EntryModel.find().sort({ createdAt: 'ascending' }); // sort: to order the results according to the specified property.

  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body;
  // console.log(req.body);

  const newEntry = new EntryModel({
    createdAt: new Date(),
    description,
  });

  try {
    await db.connect();

    // Interaction with the database
    await newEntry.save();

    await db.disconnect();

    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();

    console.log('an error here Elis:', error);

    return res.status(500).json({ message: 'Something went wrong, check the server console Elis' });
  }
};
