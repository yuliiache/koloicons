import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';
import {FC, memo} from 'react';

import styles from './NavMenu.module.scss';

const NavMenu: FC = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavLinks}>
        <li className={styles.navLinksItem}>
          <Link
            url={AppRoute.ICONS}
            type={LinkType.MAIN}
          >
            Icons
          </Link>
        </li>
        <li className={styles.navLinksItem}>
          <Link
            url={AppRoute.PRICING}
            type={LinkType.MAIN}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(NavMenu);
