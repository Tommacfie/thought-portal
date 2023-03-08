import { DataContextProvider } from './context/dataContext';
import MainViewPage from './pages/mainView/MainViewPage';

const App = () => {
  return (
    <DataContextProvider>
      <MainViewPage />
    </DataContextProvider>
  );
};

export default App;
