import MainViewContainer from './pages/mainView/containers/MainViewContainer';
import { ThoughtRecordContextProvider } from './context/thoughtRecordContext';
import ThoughtRecordPage from './pages/thoughtRecord/ThoughtRecordPage';

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
