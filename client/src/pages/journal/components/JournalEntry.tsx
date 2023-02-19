import React from 'react';
import { JournalEntryType } from '../../../types/types';

const JournalEntry = ({ journalEntry }: { journalEntry: JournalEntryType }) => {
  return (
    <div className="border">
      <div className="flex">
        <div className="mr-1">Title:</div>
        <div className="underline">{journalEntry.title}</div>
      </div>
      <div>{journalEntry.journalEntry}</div>
      <div className="flex">
        {journalEntry.tags.map((tag, index) => {
          return (
            <div className="mr-1" key={tag + index}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JournalEntry;
