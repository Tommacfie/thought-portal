import { ReactElement } from 'react';

const JournalContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <>{children}</>;
};
export default JournalContainer;
