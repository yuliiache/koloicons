import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import {useAppSelector} from 'app/hooks';
import React from 'react';

import AuthorizedUserMenu from './components/AuthorizedUserMenu';
import UnauthorizedUserMenu from './components/UnauthorizedUserMenu';
import {User} from './types/types';

const UserMenu: React.FC<User> = ({name, isPro}) => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <UnauthorizedUserMenu />;
  }

  return (
    <AuthorizedUserMenu
      name={name}
      isPro={isPro}
    />
  );
};

export default UserMenu;
