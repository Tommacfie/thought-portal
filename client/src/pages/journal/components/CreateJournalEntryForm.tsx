import React, { useState } from 'react';
import { postJournalEntry } from '../../../services/apiService';
import { CreateJournalEntryType } from '../../../types/types';
import { compileTags } from '../helpers/compileTags';
import { writeJournalEntryToFile } from '../helpers/writeJournalEntryToFile';

const initialValues: CreateJournalEntryType = {
  title: '',
  journalEntry: '',
  tags: [],
};

const CreateJournalEntryForm = () => {
  const [journalEntry, setJournalEntry] =
    useState<CreateJournalEntryType>(initialValues);
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
        <div className="text-center">Create a New Journal Entry</div>
        <input
          placeholder="Give your Journal Entry a title..."
          className="border m-1 pl-1 w-1/2 text-center"
          value={journalEntry.title}
          onChange={(event) => {
            setJournalEntry((prev) => {
              return { ...prev, title: event.target.value };
            });
          }}
        />
        <textarea
          placeholder="Write your thoughts here..."
          className="m-1 border pl-1 w-3/4"
          rows={5}
          value={journalEntry.journalEntry}
          onChange={(event) => {
            setJournalEntry((prev) => {
              return { ...prev, journalEntry: event.target.value };
            });
          }}
        />
        <input
          placeholder="Add tags here..."
          value={compileTags(journalEntry.tags)}
          className="border w-2/3 p-1 m-1"
          onChange={(event) => {
            const newTags = event.target.value.split(',');
            setJournalEntry((prev) => {
              return {
                ...prev,
                tags: [...newTags],
              };
            });
          }}
        />
        <div className="flex w-full justify-evenly items-center">
          <button type="submit" className="border p-1 m-1">
            Submit Journal Entry
          </button>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="m-1"
              id="save-journal-entry-copy-checkbox"
              onChange={() => setSaveCopy(!saveCopy)}
            />
            <label className="m-1" htmlFor="save-journal-entry-checkbox">
              Save a copy to files
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateJournalEntryForm;
