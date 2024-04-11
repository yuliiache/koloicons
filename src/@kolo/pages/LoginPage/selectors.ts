import {RootState} from 'app/store';
import {Selector} from 'react-redux';
import {createSelector} from 'reselect';

import {LOGIN_USER_KEY} from './constants';
import {LoginState, UserData} from './slices/loginUserSlice';
import {ErrorCode} from './types/ErrorCode';

const getUser: Selector<RootState, LoginState> = (state) => state[LOGIN_USER_KEY];

export const userSelector: Selector<RootState, UserData> = createSelector(
  getUser,
  (loginUser: LoginState): UserData => loginUser.user || {name: '', lastName: '', email: '', id: '', isPro: false}
);

export const userIdSelector: Selector<RootState, string | undefined> = createSelector(
  getUser,
  (loginUser: LoginState): string | undefined => loginUser.user?.id
);

export const isAuthenticatedSelector: Selector<RootState, boolean> = createSelector(
  getUser,
  (loginUser: LoginState): boolean => loginUser.isAuthenticated
);

export const errorCodeSelector: Selector<RootState, ErrorCode> = createSelector(
  getUser,
  (loginUser: LoginState): ErrorCode => loginUser.errorCode
);
