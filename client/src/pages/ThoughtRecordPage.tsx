import ThoughtRecordTable from '../components/thoughtRecordTable/ThoughtRecordTable';
import ThoughtRecordContainer from '../containers/ThoughtRecordContainer';

const ThoughtRecordPage = () => {
  return (
    <ThoughtRecordContainer>
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center">
          <div className="text-xl">Thought Record</div>
          <input
            name="title"
            placeholder="Title..."
            className="border text-xl"
          />
        </div>
        <ThoughtRecordTable />
      </div>
    </ThoughtRecordContainer>
  );
};
export default ThoughtRecordPage;
