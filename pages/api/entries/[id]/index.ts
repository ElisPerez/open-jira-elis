// import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { EntryModel, IEntry } from '../../../../models';

type Data = { message: string } | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // todo: Eliminar esta comprobacion ya que se usará la del middleware: Ready.
  // const { id } = req.query;
  // if (!mongoose.isValidObjectId(id)) {
  //   return res.status(400).json({ message: `ID: ${id} is not valid!` });
  // }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);

    case 'GET':
      return getEntry(req, res);

    default:
      return res.status(400).json({ message: 'Method is not valid! Elis' });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { id } = req.query;

  const entryToUpdate = await EntryModel.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: `Entry with ID ${id} not found` });
  }

  // Extract the description and status properties from the req.body and assign them to entryToUpdate:
  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true } // runValidators checks that the status is one of the allowed ones.
    );

    // Another way (I would avoid making another query to the database):
    // entryToUpdate.description = description;
    // entryToUpdate.status = status;
    // await entryToUpdate.save();

    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    console.error('An error here Elis:', error);
    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id } = req.query;

    await db.connect();

    const entryFound = await EntryModel.findById(id);

    await db.disconnect();

    if (!entryFound) {
      return res.status(400).json({ message: `Entry with ID: ${id} not found` });
    }

    res.status(200).json(entryFound);
  } catch (error) {
    await db.disconnect();
    console.log({ error });
  }
};
