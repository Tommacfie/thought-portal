import { useThoughtRecordContext } from '../../../context/thoughtRecordContext';

const JournalContainer = () => {
  const { journalEntries } = useThoughtRecordContext();
  console.log(journalEntries);

  return (
    <>
      {journalEntries.map((journalEntry) => {
        return <div key={journalEntry._id}>{journalEntry.title}</div>;
      })}
    </>
  );
};
export default JournalContainer;
