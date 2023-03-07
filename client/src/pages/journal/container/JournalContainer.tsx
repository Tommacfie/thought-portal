import { Link } from 'react-router-dom';
import { useDataContext } from '../../../context/dataContext';
import { deleteThoughtRecord } from '../../../services/apiService';

const JournalContainer = () => {
  const { journalEntries } = useDataContext();

  return (
    <>
      <div className="flex flex-col items-center">
        {journalEntries.map((journalEntry) => {
          return (
            <div
              className="w-1/3 border flex justify-between p-1 m-1"
              key={journalEntry._id}
            >
              <Link
                to={`/journalEntries/${journalEntry._id}`}
                className="w-3/4 flex justify-between"
              >
                <span className="">{journalEntry.title}</span>
                <span className="text-xs">
                  {new Date(journalEntry.createdAt).toDateString()}
                </span>
              </Link>
              <button
                onClick={async () =>
                  await deleteThoughtRecord(journalEntry._id)
                }
                className="mr-0"
              >
                Delete
              </button>
            </div>
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
