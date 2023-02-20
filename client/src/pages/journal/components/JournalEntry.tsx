import { useParams } from 'react-router-dom';
import { useDataContext } from '../../../context/dataContext';

const JournalEntry = () => {
  const { journalEntries } = useDataContext();
  const { id } = useParams();

  const journalEntry = journalEntries.find(
    (journalEntry) => journalEntry._id === id
  );

  return (
    <div className="border">
      <div className="flex">
        <div className="mr-1">Title:</div>
        <div className="underline">{journalEntry?.title}</div>
      </div>
      <div>{journalEntry?.journalEntry}</div>
      <div className="flex">
        {journalEntry?.tags?.map((tag, index) => {
          return (
            <div className="mr-1" key={tag + index}>
              {tag}
              {index !== journalEntry?.tags?.length - 1 ? ',' : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JournalEntry;
