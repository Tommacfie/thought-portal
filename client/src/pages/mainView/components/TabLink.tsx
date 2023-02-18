import { useThoughtRecordContext } from '../../../context/thoughtRecordContext';
import { EnumTabSelection } from '../../../types/enums';

const TabLink = ({ tab }: { tab: string }) => {
  const { setTabSelection } = useThoughtRecordContext();
  return (
    <button
      onClick={() => {
        setTabSelection(EnumTabSelection[tab as keyof typeof EnumTabSelection]);
      }}
    >
      {tab}
    </button>
  );
};
export default TabLink;
