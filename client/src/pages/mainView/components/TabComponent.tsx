import React, { ReactElement } from 'react';

const TabComponent = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <div className="flex justify-evenly">{children}</div>;
};

export default TabComponent;
