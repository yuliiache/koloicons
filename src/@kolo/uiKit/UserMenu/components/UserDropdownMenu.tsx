import {logoutUserStartAction} from '@kolo/pages/LoginPage/slices/loginUserSlice';
import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {useAppDispatch} from 'app/hooks';
import {AppDispatch} from 'app/store';
import {AppRoute} from 'constants/AppRoute';
import React from 'react';

interface UserMenuLink {
  url: AppRoute;
  type: LinkType;
  name: string;
  id: string;
  onClick?: () => void;
}

const createUserMenuLinks = (dispatch: AppDispatch): UserMenuLink[] => [
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
    onClick: () => dispatch(logoutUserStartAction()),
  },
];

const UserDropdownMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const userMenuLinks = createUserMenuLinks(dispatch);

  return (
    <ul
      role="menu"
      aria-label="user options"
    >
      {userMenuLinks.map(({url, type, name, id, onClick}) => (
        <li
          key={id}
          role="menuitem"
        >
          <Link
            key={id}
            url={url}
            type={type}
            onClick={onClick}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserDropdownMenu;
