import ThoughtRecordTableComponent from './ThoughtRecordTableComponent';

const ThoughtRecordComponent = () => {
  return (
    <div>
      <h1>Thought Record</h1>
      <input name="title" placeholder="Title..." />
      <ThoughtRecordTableComponent />
    </div>
  );
};
export default ThoughtRecordComponent;
