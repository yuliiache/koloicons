import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {ErrorCode} from '../types/errorCode';

export type Message = string | null;

export interface ResetPassword {
  isSuccessfullyResetPassword: boolean;
  message: Message;
  errorCode: ErrorCode;
}

export interface ResetPasswordDto {
  newPassword: string;
  passwordResetToken: string;
}

export const RESET_PASSWORD_KEY = 'resetPassword';

const initialState: ResetPassword = {
  isSuccessfullyResetPassword: false,
  errorCode: null,
  message: null,
} as const;

const resetPasswordSlice = createSlice({
  name: RESET_PASSWORD_KEY,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetPasswordStart: (state: ResetPassword, action: PayloadAction<ResetPasswordDto>): ResetPassword => ({
      ...state,
      errorCode: null,
      isSuccessfullyResetPassword: false,
    }),
    resetPasswordSuccess: (state: ResetPassword, action: PayloadAction<Message>): ResetPassword => ({
      ...state,
      message: action.payload,
      errorCode: null,
      isSuccessfullyResetPassword: true,
    }),
    resetPasswordFail: (_, action): ResetPassword => {
      return {message: null, errorCode: action.payload, isSuccessfullyResetPassword: false};
    },
  },
});

export const {
  resetPasswordStart: resetPasswordStartAction,
  resetPasswordSuccess: resetPasswordSuccessAction,
  resetPasswordFail: resetPasswordFailAction,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
