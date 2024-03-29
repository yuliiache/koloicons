import UserMenu from '@kolo/uiKit/UserMenu/UserMenu';

import {Section} from '../Section/Section';
import styles from './UserMenus.module.scss';

const UserMenus = () => {
  return (
    <Section title={'UserMenu'}>
      <div className={styles.container}>
        <UserMenu
          name={'Bubble'}
          isPro={false}
        />
        <UserMenu
          name={'Bubble'}
          isPro={true}
        />
        <UserMenu
          name={'Bubble'}
          isPro={false}
        />
      </div>
    </Section>
  );
};

export default UserMenus;
