import ThoughtRecordTableComponent from '../components/thoughtRecordTable/ThoughtRecordTable';

const ThoughtRecordComponent = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center">
        <div className="text-xl">Thought Record</div>
        <input name="title" placeholder="Title..." className="border text-xl" />
      </div>
      <ThoughtRecordTableComponent />
    </div>
  );
};
export default ThoughtRecordComponent;
