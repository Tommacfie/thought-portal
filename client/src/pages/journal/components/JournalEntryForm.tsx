import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postJournalEntry } from '../../../services/apiService';
import { CreateJournalEntryType } from '../../../types/types';
import { writeJournalEntryToFile } from '../helpers/writeJournalEntryToFile';
import JournalEntryFormFields from './JournalEntryFormFields';

const JournalEntryForm = () => {
  const methods = useForm<CreateJournalEntryType>();
  const navigate = useNavigate();

  const [saveCopy, setSaveCopy] = useState(false);
  const submissionHandler: SubmitHandler<CreateJournalEntryType> = async (
    data
  ) => {
    await postJournalEntry(data);
    if (saveCopy) {
      writeJournalEntryToFile(data);
    }
    navigate('/journalEntries');
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-evenly items-center border p-10 h-1/2"
        onSubmit={methods.handleSubmit(submissionHandler)}
      >
        <button className="mr-auto" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="text-center text-xl">Create a New Journal Entry</div>
        <JournalEntryFormFields readOnly={false} />
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
    </FormProvider>
  );
};

export default JournalEntryForm;
