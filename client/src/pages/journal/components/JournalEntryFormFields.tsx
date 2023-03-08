import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

const JournalEntryFormFields = ({
  readOnly,
  setReadOnly,
}: {
  readOnly: boolean;
  setReadOnly?: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register } = useFormContext();
  return (
    <>
      <label className="hidden" htmlFor="journal-entry-title-input">
        Journal Entry Title Input
      </label>
      <input
        placeholder="Give your Journal Entry a title..."
        className="border m-1 p-1 w-1/2 text-center"
        {...register('title')}
        name={'title'}
        onFocus={() => setReadOnly && setReadOnly(false)}
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
        onFocus={() => setReadOnly && setReadOnly(false)}
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
        onFocus={() => setReadOnly && setReadOnly(false)}
        readOnly={readOnly}
      />
    </>
  );
};

export default JournalEntryFormFields;
