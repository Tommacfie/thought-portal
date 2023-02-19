import { useState } from 'react';
import { useThoughtRecordContext } from '../../../context/thoughtRecordContext';
import JournalEntry from '../components/JournalEntry';

const JournalContainer = () => {
  const { journalEntries } = useThoughtRecordContext();
  const [showJournalEntry, setShowJournalEntry] = useState(false);

  return (
    <>
      {journalEntries.map((journalEntry) => {
        return (
          <div key={journalEntry._id}>
            <button
              className="border p-1"
              onClick={() => setShowJournalEntry(!showJournalEntry)}
            >
              {journalEntry.title}
            </button>
            {showJournalEntry && <JournalEntry journalEntry={journalEntry} />}
          </div>
        );
      })}
    </>
  );
};
export default JournalContainer;
