import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces';

// The "I" in "IEntry" is to indicate that it is an interface
interface IEntry extends Entry {}

const entrySchema = new Schema(
  {
    createdAt: { type: Number },
    description: { type: String, require: true },
    status: {
      type: String,
      enum: {
        values: ['pending', 'in-progress', 'finished'],
        message: '{VALUE} is not an allowed state',
      },
    },
  },
  { collection: 'entries' } // Custom collection name 😎
);

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;
