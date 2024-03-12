import {RootState} from 'app/store';
import {Selector} from 'react-redux';
import {createSelector} from 'reselect';

import {LOGIN_USER_KEY} from './constants';
import {LoginState, UserData} from './slices/loginUserSlice';
import {ErrorCode} from './types/ErrorCode';

const getUser: Selector<RootState, LoginState> = (state) => state[LOGIN_USER_KEY];

export const loggedInUserSelector: Selector<RootState, UserData | null> = createSelector(
  getUser,
  (loginUser: LoginState): UserData | null => loginUser.user
);

export const isAuthenticatedSelector: Selector<RootState, boolean> = createSelector(
  getUser,
  (loginUser: LoginState): boolean => loginUser.isAuthenticated
);

export const errorCodeSelector: Selector<RootState, ErrorCode> = createSelector(
  getUser,
  (loginUser: LoginState): ErrorCode => loginUser.errorCode
);
