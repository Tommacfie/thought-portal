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
import { EnumTabSelection } from '../types/enums';
import { JournalEntryType, ThoughtRecordType } from '../types/types';

export interface DataContextType {
  thoughtRecords: ThoughtRecordType[];
  setThoughtRecords: Dispatch<SetStateAction<ThoughtRecordType[]>>;
  journalEntries: JournalEntryType[];
  setJournalEntries: Dispatch<SetStateAction<JournalEntryType[]>>;
  tabSelection: EnumTabSelection | undefined;
  setTabSelection: Dispatch<SetStateAction<EnumTabSelection | undefined>>;
}

const DataContext = createContext<DataContextType>({
  thoughtRecords: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThoughtRecords: () => {},
  journalEntries: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setJournalEntries: () => {},
  tabSelection: EnumTabSelection.HOME,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTabSelection: () => {},
});

export default DataContext;

export const DataContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [thoughtRecords, setThoughtRecords] = useState<ThoughtRecordType[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntryType[]>([]);
  const [tabSelection, setTabSelection] = useState<EnumTabSelection>();

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

  return (
    <DataContext.Provider
      value={{
        thoughtRecords,
        setThoughtRecords,
        journalEntries,
        setJournalEntries,
        tabSelection,
        setTabSelection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
