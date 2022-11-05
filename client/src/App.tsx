import ThoughtRecordComponent from './containers/ThoughtRecordComponent';
import ThoughtRecordContainer from './containers/ThoughtRecordContainer';
import ThoughtRecordPage from './pages/ThoughtRecordPage';

const App = () => {
  return (
    <div>
      <ThoughtRecordPage>
        <ThoughtRecordContainer>
          <ThoughtRecordComponent />
        </ThoughtRecordContainer>
      </ThoughtRecordPage>
    </div>
  );
};

export default App;
