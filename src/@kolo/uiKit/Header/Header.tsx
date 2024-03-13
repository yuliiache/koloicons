import {shouldHideNavigationAndMenu} from '@kolo/services/helpers/shouldHideNavigationAndMenu';
import classnames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';
import {useLocation} from 'react-router';

import Icon from '../Icons';
import Link from '../Link/Link';
import Logo from '../Logo';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Header: FC = () => {
  //TODO: Add Loading and User selectors
  const location = useLocation();
  const pathname = location.pathname;
  const isHidden = shouldHideNavigationAndMenu(pathname);
  const headerClasses = classnames(styles.headerContainer, {
    [styles.hidden]: isHidden,
  });

  return (
    <header className={styles.header}>
      <div className={headerClasses}>
        {!isHidden && <NavMenu />}
        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer}>
            <Link url={AppRoute.HOME}>
              <Icon.LogoText />
            </Link>
            <div className={styles.logo}>
              <Logo isLoading={false} />
            </div>
          </div>
        </div>
        {!isHidden && (
          <UserMenu
            email={''}
            name={''}
            isPro={false}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
