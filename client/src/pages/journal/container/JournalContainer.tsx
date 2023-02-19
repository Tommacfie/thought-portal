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
          <div>
            <button
              onClick={() => setShowJournalEntry(!showJournalEntry)}
              key={journalEntry._id}
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
