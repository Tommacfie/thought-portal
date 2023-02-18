import { EnumTabSelection } from '../../../../types/enums';
import TabComponent from '../TabComponent';
import TabLink from '../TabLink';

const NavBar = () => {
  return (
    <TabComponent>
      {Object.keys(EnumTabSelection).map((key) => {
        return <TabLink key={key} tab={key} />;
      })}
    </TabComponent>
  );
};

export default NavBar;
