import MainViewContainer from './containers/MainViewContainer';
import { ThoughtRecordContextProvider } from './context/thoughtRecordContext';
import ThoughtRecordPage from './pages/ThoughtRecordPage';

const App = () => {
  return (
    <ThoughtRecordContextProvider>
      <MainViewContainer>
        <ThoughtRecordPage />
      </MainViewContainer>
    </ThoughtRecordContextProvider>
  );
};

export default App;
