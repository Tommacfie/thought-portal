import { ReactElement } from 'react';

const JournalPage = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <div className="w-full h-full border">{children}</div>;
};

export default JournalPage;
