import { Link } from 'react-router-dom';

const TabLink = ({ tab }: { tab: string }) => {
  return <Link to={tab}>{tab}</Link>;
};
export default TabLink;
