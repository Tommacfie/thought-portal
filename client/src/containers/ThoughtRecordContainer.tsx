import { ReactElement } from 'react';

const ThoughtRecordContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <>{children}</>;
};
export default ThoughtRecordContainer;
