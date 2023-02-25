import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postJournalEntry } from '../../../services/apiService';
import { CreateJournalEntryType } from '../../../types/types';
import { writeJournalEntryToFile } from '../helpers/writeJournalEntryToFile';

const JournalEntryForm = () => {
  const { register, handleSubmit } = useForm<CreateJournalEntryType>();
  const navigate = useNavigate();

  const submissionHandler: SubmitHandler<CreateJournalEntryType> = async (
    data
  ) => {
    await postJournalEntry(data);
    if (saveCopy) {
      writeJournalEntryToFile(data);
    }
    navigate('/journalEntries');
  };

  const [saveCopy, setSaveCopy] = useState(false);
  const [readOnly] = useState(false);
  return (
    <form
      className="flex flex-col justify-evenly items-center border py-10 h-1/2"
      onSubmit={handleSubmit(submissionHandler)}
    >
      <div className="text-center text-xl">Create a New Journal Entry</div>
      <label className="hidden" htmlFor="journal-entry-title-input">
        Journal Entry Title Input
      </label>
      <input
        placeholder="Give your Journal Entry a title..."
        className="border m-1 p-1 w-1/2 text-center"
        {...register('title')}
        name={'title'}
        readOnly={readOnly}
      />
      <label className="hidden" htmlFor="journal-entry-body-input">
        Journal Entry Body Input
      </label>
      <textarea
        placeholder="Write your thoughts here..."
        className="m-1 border px-3 py-2 w-3/4"
        rows={15}
        {...register('journalEntry')}
        name={'journalEntry'}
        readOnly={readOnly}
      />
      <label className="hidden" htmlFor="journal-entry-tags-input">
        Journal Entry Tags Input
      </label>
      <input
        placeholder="Add comma-separated tags here, i.e: work, friends, parents etc"
        className="border w-2/3 py-1 px-2 m-1 text-sm"
        {...register('tags')}
        name={'tags'}
        readOnly={readOnly}
      />
      <div className="flex w-full justify-evenly items-center">
        <button type="submit" className="border p-2 m-1">
          Submit Journal Entry
        </button>
        <div className="flex items-center border p-1">
          <input
            type="checkbox"
            className="m-1"
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

export default JournalEntryForm;
