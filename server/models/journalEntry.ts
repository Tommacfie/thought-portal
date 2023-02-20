import mongoose from './index';
const { Schema, model } = mongoose;
import { JournalEntryType } from '../utils/types';

const journalEntrySchema = new Schema<JournalEntryType>(
  {
    title: String,
    journalEntry: String,
    tags: [String],
  },
  { timestamps: true }
);

const JournalEntry = model<JournalEntryType>(
  'journalEntry',
  journalEntrySchema
);

export default JournalEntry;
