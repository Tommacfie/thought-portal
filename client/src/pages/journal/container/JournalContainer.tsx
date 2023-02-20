import { Link } from 'react-router-dom';
import { useDataContext } from '../../../context/dataContext';

const JournalContainer = () => {
  const { journalEntries } = useDataContext();

  return (
    <>
      {journalEntries.map((journalEntry) => {
        return (
          <div key={journalEntry._id}>
            <Link
              className="border p-1"
              to={`/journalEntries/${journalEntry._id}`}
            >
              {journalEntry.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default JournalContainer;
