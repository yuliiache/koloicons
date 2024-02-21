import React from 'react';

import AuthorizedUserMenu from './components/AuthorizedUserMenu';
import UnauthorizedUserMenu from './components/UnauthorizedUserMenu';
import useAuth from './hooks/useAuth';
import {User} from './types/types';

const UserMenu: React.FC<User> = ({email, name, isPro}) => {
  const {isAuthenticated} = useAuth(email, name);

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
