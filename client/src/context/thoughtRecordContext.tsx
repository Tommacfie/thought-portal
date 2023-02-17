import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getJournalEntries, getThoughtRecords } from '../services/apiService';
import { JournalEntryType, ThoughtRecordType } from '../types/types';

export interface ThoughtRecordContextType {
  thoughtRecords: ThoughtRecordType[];
  setThoughtRecords: Dispatch<SetStateAction<ThoughtRecordType[]>>;
  journalEntries: JournalEntryType[];
  setJournalEntries: Dispatch<SetStateAction<JournalEntryType[]>>;
}

const ThoughtRecordContext = createContext<ThoughtRecordContextType>({
  thoughtRecords: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThoughtRecords: () => {},
  journalEntries: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setJournalEntries: () => {},
});

export default ThoughtRecordContext;

export const ThoughtRecordContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [thoughtRecords, setThoughtRecords] = useState<ThoughtRecordType[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntryType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const newThoughtRecords: ThoughtRecordType[] = await getThoughtRecords();
      setThoughtRecords(newThoughtRecords);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const newJournalEntries: JournalEntryType[] = await getJournalEntries();
      setJournalEntries(newJournalEntries);
    };
    fetchItems();
  }, []);

  console.log(thoughtRecords, journalEntries);

  return (
    <ThoughtRecordContext.Provider
      value={{
        thoughtRecords,
        setThoughtRecords,
        journalEntries,
        setJournalEntries,
      }}
    >
      {children}
    </ThoughtRecordContext.Provider>
  );
};

export const useThoughtRecordContext = () => {
  return useContext(ThoughtRecordContext);
};
