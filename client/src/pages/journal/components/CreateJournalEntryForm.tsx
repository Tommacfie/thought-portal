import React, { useState } from 'react';
import { postJournalEntry } from '../../../services/apiService';
import { JournalEntryType } from '../../../types/types';
import { writeJournalEntryToFile } from '../helpers/writeJournalEntryToFile';

const initialValues: JournalEntryType = {
  _id: undefined,
  title: '',
  journalEntry: '',
  tags: [],
};

const CreateJournalEntryForm = () => {
  const [journalEntry, setJournalEntry] =
    useState<JournalEntryType>(initialValues);
  const [saveCopy, setSaveCopy] = useState(false);
  return (
    <form
      onSubmit={async (event) => {
        await postJournalEntry(journalEntry);
        if (saveCopy) {
          writeJournalEntryToFile(journalEntry);
        }
        setJournalEntry(initialValues);
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-center">Journal Page</div>
        <input
          placeholder="Title"
          className="border m-1 pl-1 w-1/2"
          value={journalEntry.title}
          onChange={(event) => {
            setJournalEntry((prev) => {
              return { ...prev, title: event.target.value };
            });
          }}
        />
        <textarea
          placeholder="Journal"
          className="m-1 border pl-1 w-2/3"
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
        <div className="flex w-full justify-evenly items-center">
          <button type="submit" className="border p-1">
            Submit Journal Entry
          </button>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-1"
              id="save-journal-entry-copy-checkbox"
              onChange={() => setSaveCopy(!saveCopy)}
            />
            <label htmlFor="save-journal-entry-checkbox">
              Save a copy to files
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateJournalEntryForm;
