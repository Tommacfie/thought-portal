import { EnumThoughtRecordTablePlaceHolder } from '../../types/enums';
import ThoughtRecordTableCell from './ThoughtRecordTableCell';
import ThoughtRecordTableHeader from './ThoughtRecordTableHeader';

const ThoughtRecordTableComponent = () => {
  return (
    <table className="border h-[800px]">
      <thead>
        <tr>
          <ThoughtRecordTableHeader />
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(EnumThoughtRecordTablePlaceHolder).map((key) => (
            <ThoughtRecordTableCell placeholder={key} />
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default ThoughtRecordTableComponent;
