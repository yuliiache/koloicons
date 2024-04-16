import {RootState} from 'app/store';
import {Selector} from 'react-redux';
import {createSelector} from 'reselect';

import {RESET_PASSWORD_KEY, ResetPassword} from './slice/resetPasswordSlice';

const resetPassword: Selector<RootState, ResetPassword> = (state) => state[RESET_PASSWORD_KEY];

export const isSuccessfullyResetPasswordSelector: Selector<RootState, boolean> = createSelector(
  resetPassword,
  (resetPassword: ResetPassword): boolean => resetPassword.isSuccessfullyResetPassword
);
