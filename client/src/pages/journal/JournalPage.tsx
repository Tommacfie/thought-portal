import CreateJournalEntryForm from './components/CreateJournalEntryForm';
import JournalContainer from './container/JournalContainer';

const JournalPage = () => {
  return (
    <div className="w-full h-full border">
      <div>Journals List:</div>
      <JournalContainer />
      <CreateJournalEntryForm />
    </div>
  );
};

export default JournalPage;