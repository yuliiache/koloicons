import UserMenu from '@kolo/uiKit/UserMenu/UserMenu';

import {Section} from '../Section/Section';
import styles from './UserMenus.module.scss';

const UserMenus = () => {
  return (
    <Section title={'UserMenu'}>
      <div className={styles.container}>
        <UserMenu
          email={'bubble@gmail.com'}
          name={'Bubble'}
          isPro={false}
        />
        <UserMenu
          email={'bubble@gmail.com'}
          name={'Bubble'}
          isPro={true}
        />
        <UserMenu
          email={''}
          name={'Bubble'}
          isPro={false}
        />
      </div>
    </Section>
  );
};

export default UserMenus;
