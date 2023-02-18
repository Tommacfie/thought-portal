import { useThoughtRecordContext } from '../../context/thoughtRecordContext';
import { EnumTabSelection } from '../../types/enums';
import HomePage from '../home/HomePage';
import JournalPage from '../journal/JournalPage';
import ThoughtRecordPage from '../thoughtRecord/ThoughtRecordPage';
import NavBar from './components/navigation/NavBar';
import MainViewContainer from './containers/MainViewContainer';

const MainViewPage = () => {
  const { tabSelection } = useThoughtRecordContext();
  return (
    <MainViewContainer>
      <NavBar />
      <>
        {tabSelection === EnumTabSelection.HOME && <HomePage />}
        {tabSelection === EnumTabSelection.THOUGHTRECORDPAGE && (
          <ThoughtRecordPage />
        )}
        {tabSelection === EnumTabSelection.JOURNALPAGE && <JournalPage />}
      </>
    </MainViewContainer>
  );
};
export default MainViewPage;
