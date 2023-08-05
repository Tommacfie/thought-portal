import JournalEntry from '../../../models/journalEntry';
import { JournalEntryType } from '../../types';

export const journalEntries = [
  {
    title: 'First Journal Entry',
    journalEntry: 'Content',
    tags: ['one'],
  },
  {
    title: 'Second Journal Entry',
    journalEntry: 'Content',
    tags: ['two'],
  },
  {
    title: 'Third Journal Entry',
    journalEntry: 'Content',
    tags: ['three'],
  },
];

Promise.all([
  journalEntries.forEach(async (thoughtRecord: JournalEntryType) => {
    await JournalEntry.create(thoughtRecord);
  }),
]);
