import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getThoughtRecords } from '../services/apiService';
import { ThoughtRecordType } from '../types/types';

export interface ThoughtRecordContextType {
  thoughtRecords: ThoughtRecordType[];
  setThoughtRecords: Dispatch<SetStateAction<ThoughtRecordType[]>>;
}

const ThoughtRecordContext = createContext<ThoughtRecordContextType>({
  thoughtRecords: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThoughtRecords: () => {},
});

export default ThoughtRecordContext;

export const ThoughtRecordContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [thoughtRecords, setThoughtRecords] = useState<ThoughtRecordType[]>([]);
  console.log(thoughtRecords);

  useEffect(() => {
    const fetchItems = async () => {
      const newThoughtRecords: ThoughtRecordType[] = await getThoughtRecords();
      setThoughtRecords(newThoughtRecords);
    };
    fetchItems();
  }, []);

  return (
    <ThoughtRecordContext.Provider
      value={{ thoughtRecords, setThoughtRecords }}
    >
      {children}
    </ThoughtRecordContext.Provider>
  );
};

export const useThoughtRecordContext = () => {
  return useContext(ThoughtRecordContext);
};
