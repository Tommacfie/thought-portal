import JournalPage from '../journal/JournalPage';
import ThoughtRecordPage from '../thoughtRecord/ThoughtRecordPage';
import MainViewContainer from './containers/MainViewContainer';

const MainViewPage = () => {
  return (
    <MainViewContainer>
      <ThoughtRecordPage />
      <JournalPage />
    </MainViewContainer>
  );
};
export default MainViewPage;
