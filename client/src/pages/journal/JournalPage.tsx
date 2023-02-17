import { useState } from 'react';
import { postJournalEntry } from '../../services/apiService';
import { JournalEntryType } from '../../types/types';
import JournalContainer from './container/JournalContainer';

const initialValues: JournalEntryType = {
  title: '',
  journalEntry: '',
  tags: [],
};

const JournalPage = () => {
  const [journalEntry, setJournalEntry] =
    useState<JournalEntryType>(initialValues);

  return (
    <JournalContainer>
      <div className="w-full h-full">
        <form
          onSubmit={async () => {
            await postJournalEntry(journalEntry);
            setJournalEntry(initialValues);
          }}
        >
          <div className="flex flex-col w-1/2">
            <div className="text-center">Journal Page</div>
            <input
              placeholder="Title"
              className="border m-1 pl-1"
              value={journalEntry.title}
              onChange={(event) => {
                setJournalEntry((prev) => {
                  return { ...prev, title: event.target.value };
                });
              }}
            />
            <textarea
              placeholder="Journal"
              className="m-1 border pl-1"
              value={journalEntry.journalEntry}
              onChange={(event) => {
                setJournalEntry((prev) => {
                  return { ...prev, journalEntry: event.target.value };
                });
              }}
            />
            {/* <input
              value={[...journalEntry.tags]}
              onChange={(event) => {
                const newTags = event.target.value.split(',');
                setJournalEntry((prev) => {
                  return {
                    ...prev,
                    tags: [...journalEntry.tags, ...newTags],
                  };
                });
              }}
            /> */}
            <button type="submit">Submit Journal Entry</button>
          </div>
        </form>
      </div>
    </JournalContainer>
  );
};

export default JournalPage;
