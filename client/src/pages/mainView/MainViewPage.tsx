import { Route, Routes } from 'react-router-dom';
import HomePage from '../home/HomePage';
import JournalEntry from '../journal/components/JournalEntry';
import JournalEntryForm from '../journal/components/JournalEntryForm';
import JournalContainer from '../journal/container/JournalContainer';
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

          <Route path="/journalEntries">
            <Route
              index
              element={
                <JournalPage>
                  <JournalContainer />
                  <JournalEntryForm />
                </JournalPage>
              }
            />
            <Route
              path=":id"
              element={
                <JournalPage>
                  <JournalEntry />
                </JournalPage>
              }
            />
            <Route
              path="create"
              element={
                <JournalPage>
                  <div>Hello</div>
                  <JournalEntryForm />
                </JournalPage>
              }
            />
          </Route>
        </Routes>
      </>
    </MainViewContainer>
  );
};
export default MainViewPage;
