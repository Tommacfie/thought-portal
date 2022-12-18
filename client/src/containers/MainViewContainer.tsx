import { ReactElement } from 'react';

const MainViewContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <div className="h-screen w-screen"> {children}</div>;
};
export default MainViewContainer;
