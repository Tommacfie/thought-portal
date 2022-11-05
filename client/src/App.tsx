import ThoughtRecordComponent from './components/ThoughtRecordComponent';
import ThoughtRecordContainer from './containers/ThoughtRecordContainer';
import ThoughtRecordPage from './pages/ThoughtRecordPage';

const App = () => {
  return (
    <div className="bg-red-500">
      <ThoughtRecordPage>
        <ThoughtRecordContainer>
          <ThoughtRecordComponent />
        </ThoughtRecordContainer>
      </ThoughtRecordPage>
    </div>
  );
};

export default App;
