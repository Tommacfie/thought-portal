import { ReactElement } from 'react';

const ThoughtRecordContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <div className="h-full w-full">{children}</div>;
};
export default ThoughtRecordContainer;
