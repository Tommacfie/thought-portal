import JournalPage from '../journal/JournalPage';
import ThoughtRecordPage from '../thoughtRecord/ThoughtRecordPage';
import NavBar from './components/navigation/NavBar';
import MainViewContainer from './containers/MainViewContainer';

const MainViewPage = () => {
  return (
    <MainViewContainer>
      <NavBar />
      <ThoughtRecordPage />
      <JournalPage />
    </MainViewContainer>
  );
};
export default MainViewPage;
