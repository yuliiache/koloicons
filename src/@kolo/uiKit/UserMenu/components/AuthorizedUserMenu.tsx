import {ButtonColor} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';
import React from 'react';

import useDropdown from '../hooks/useDropdown';
import UserDropdownMenu from './UserDropdownMenu';
import styles from './UserMenu.module.scss';

interface AuthorizedUserMenuProps {
  name: string;
  isPro: boolean;
}

const AuthorizedUserMenu: React.FC<AuthorizedUserMenuProps> = ({isPro, name}) => {
  const {isDropdownVisible, showDropdown, hideDropdown} = useDropdown();
  const getFirstLetter = (str: string) => {
    return str.charAt(0);
  };

  return (
    <section className={styles.userMenu}>
      <div
        className={styles.hoverMenu}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        aria-haspopup="true"
        aria-expanded={isDropdownVisible}
        data-testid="hover-area"
      >
        <section className={styles.userInfo}>
          <div className={styles.circle}>{getFirstLetter(name)}</div>
          <Link
            url={AppRoute.MY_ACCOUNT}
            type={LinkType.MAIN}
          >
            {name}
          </Link>
          {isDropdownVisible && <UserDropdownMenu />}
        </section>
      </div>
      {!isPro && (
        <ButtonLink
          url={AppRoute.PRICING}
          text={'Upgrade'}
          color={ButtonColor.ACCENT}
        />
      )}
    </section>
  );
};

export default AuthorizedUserMenu;
