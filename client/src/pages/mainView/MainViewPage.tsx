import { Route, Routes } from 'react-router-dom';
import HomePage from '../home/HomePage';
import JournalPage from '../journal/JournalPage';
import ThoughtRecordPage from '../thoughtRecord/ThoughtRecordPage';
import NavBar from './components/navigation/NavBar';
import MainViewContainer from './containers/MainViewContainer';

const MainViewPage = () => {
  return (
    <MainViewContainer>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thoughtRecords" element={<ThoughtRecordPage />} />
          <Route path="/journalEntries" element={<JournalPage />} />
        </Routes>
      </>
    </MainViewContainer>
  );
};
export default MainViewPage;
