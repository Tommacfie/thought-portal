import { JournalEntryType } from '../../../types/types';

export const writeJournalEntryToFile = (journalEntry: JournalEntryType) => {
  const fileData = JSON.stringify(journalEntry);
  const blob = new Blob([fileData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `${journalEntry.title}.journalEntry.txt`;
  link.href = url;
  link.click();
};
