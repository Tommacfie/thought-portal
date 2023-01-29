import { ThoughtRecordContextProvider } from './context/thoughtRecordContext';
import MainViewPage from './pages/mainView/MainViewPage';

const App = () => {
  return (
    <ThoughtRecordContextProvider>
      <MainViewPage />
    </ThoughtRecordContextProvider>
  );
};

export default App;
