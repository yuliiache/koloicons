import classnames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import Icon from '../Icons';
import Link from '../Link/Link';
import Logo from '../Logo';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu';
import {useHeader} from './useHeader';

const Header: FC = () => {
  const {name, isPro, isLoading, isHidden} = useHeader();
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
              <Logo isLoading={isLoading} />
            </div>
          </div>
        </div>
        {!isHidden && (
          <UserMenu
            name={name}
            isPro={isPro}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
