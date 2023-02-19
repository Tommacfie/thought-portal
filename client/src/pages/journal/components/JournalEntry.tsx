import React from 'react';
import { JournalEntryType } from '../../../types/types';

const JournalEntry = ({ journalEntry }: { journalEntry: JournalEntryType }) => {
  return (
    <div>
      <div className="flex">
        <div className="mr-1">Title:</div>
        <div className="underline">{journalEntry.title}</div>
      </div>
      <div>{journalEntry.journalEntry}</div>
      <div className="flex">
        {journalEntry.tags.map((tag) => {
          return <div className="mr-1">{tag}</div>;
        })}
      </div>
    </div>
  );
};

export default JournalEntry;
