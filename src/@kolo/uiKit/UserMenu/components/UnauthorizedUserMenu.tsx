import Icon from '@kolo/uiKit/Icons';
import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';
import React from 'react';

import styles from './UserMenu.module.scss';

const UnauthorizedUserMenu = () => {
  return (
    <section className={styles.signIn}>
      <Link
        url={AppRoute.LOGIN}
        type={LinkType.MAIN}
      >
        <div className={styles.signInContent}>
          <Icon.User className={styles.icon} />
          Sign In
        </div>
      </Link>
    </section>
  );
};

export default UnauthorizedUserMenu;
