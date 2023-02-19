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
      className="flex flex-col justify-evenly items-center border py-10 h-1/2"
      onSubmit={async (event) => {
        await postJournalEntry(journalEntry);
        if (saveCopy) {
          writeJournalEntryToFile(journalEntry);
        }
        setJournalEntry(initialValues);
      }}
    >
      <div className="text-center text-xl">Create a New Journal Entry</div>
      <label className="hidden" htmlFor="journal-entry-title-input">
        Journal Entry Title Input
      </label>
      <input
        id="journal-entry-title-input"
        placeholder="Give your Journal Entry a title..."
        className="border m-1 p-1 w-1/2 text-center"
        value={journalEntry.title}
        onChange={(event) => {
          setJournalEntry((prev) => {
            return { ...prev, title: event.target.value };
          });
        }}
      />
      <label className="hidden" htmlFor="journal-entry-body-input">
        Journal Entry Body Input
      </label>
      <textarea
        id="journal-entry-body-input"
        placeholder="Write your thoughts here..."
        className="m-1 border px-3 py-2 w-3/4"
        rows={15}
        value={journalEntry.journalEntry}
        onChange={(event) => {
          setJournalEntry((prev) => {
            return { ...prev, journalEntry: event.target.value };
          });
        }}
      />
      <label className="hidden" htmlFor="journal-entry-tags-input">
        Journal Entry Tags Input
      </label>
      <input
        id="journal-entry-tags-input"
        placeholder="Add comma-separated tags here, i.e: big news, friends, parents etc"
        value={compileTags(journalEntry.tags)}
        className="border w-2/3 py-1 px-2 m-1 text-sm"
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
            Save a copy to file
          </label>
        </div>
      </div>
    </form>
  );
};

export default CreateJournalEntryForm;
