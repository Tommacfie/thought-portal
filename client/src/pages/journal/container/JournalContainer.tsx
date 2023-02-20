import { Link } from 'react-router-dom';
import { useDataContext } from '../../../context/dataContext';

const JournalContainer = () => {
  const { journalEntries } = useDataContext();

  return (
    <>
      <div className="flex flex-col items-center">
        {journalEntries.map((journalEntry) => {
          return (
            <Link
              to={`/journalEntries/${journalEntry._id}`}
              className="w-1/3 border text-center p-1 m-1"
            >
              <div key={journalEntry._id} className="flex justify-center">
                <span className="mx-auto">{journalEntry.title}</span>
                <span className="text-xs">
                  {new Date(journalEntry.createdAt).toDateString()}
                </span>
              </div>
            </Link>
          );
        })}
        <Link
          className="w-1/3 border text-center p-1 m-1"
          to={'/journalEntries/create'}
        >
          Create a Journal Entry
        </Link>
      </div>
    </>
  );
};

export default JournalContainer;
