import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';
import React from 'react';

interface UserMenuLink {
  url: AppRoute;
  type: LinkType;
  name: string;
  id: string;
}

const userMenuLinks: UserMenuLink[] = [
  {
    url: AppRoute.MY_ACCOUNT,
    type: LinkType.MAIN,
    name: 'Account Data',
    id: 'user-menu-account-data',
  },
  {
    url: AppRoute.ICONS,
    type: LinkType.MAIN,
    name: 'Exit',
    id: 'user-menu-exit',
  },
];

const UserDropdownMenu: React.FC = () => {
  return (
    <ul
      role="menu"
      aria-label="user options"
    >
      {userMenuLinks.map(({url, type, name, id}) => (
        <li
          key={id}
          role="menuitem"
        >
          <Link
            key={id}
            url={url}
            type={type}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserDropdownMenu;
