import { EnumThoughtRecordTablePlaceHolder } from '../../../../types/enums';
import ThoughtRecordTableCell from './ThoughtRecordTableCell';
import ThoughtRecordTableHeader from './ThoughtRecordTableHeader';

const ThoughtRecordTable = () => {
  return (
    <table className="h-1/2 border">
      <ThoughtRecordTableHeader />
      <tbody>
        <tr>
          {Object.keys(EnumThoughtRecordTablePlaceHolder).map((key) => (
            <ThoughtRecordTableCell placeholder={key} key={key} />
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default ThoughtRecordTable;
