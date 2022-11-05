import { EnumThoughtRecordTablePlaceHolder } from '../../types/types';

const ThoughtRecordTableCell = ({ placeholder }: { placeholder: string }) => {
  return (
    <td className="border pt-1">
      <textarea
        placeholder={
          EnumThoughtRecordTablePlaceHolder[
            placeholder as keyof typeof EnumThoughtRecordTablePlaceHolder
          ]
        }
        className="resize-none w-full h-full p-4"
      />
    </td>
  );
};
export default ThoughtRecordTableCell;
