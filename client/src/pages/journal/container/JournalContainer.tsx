import { useThoughtRecordContext } from '../../../context/thoughtRecordContext';

const JournalContainer = () => {
  const { journalEntries } = useThoughtRecordContext();
  console.log(journalEntries);

  return (
    <>
      {journalEntries.map(() => {
        return <div>Journal Entry</div>;
      })}
    </>
  );
};
export default JournalContainer;
