import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RegisterFormValues} from '../../RegisterPage/components/RegisterForm/types/RegisterFormValues';
import {LOGIN_USER_KEY} from '../constants';
import {ErrorCode} from '../types/ErrorCode';
import {LoginFormValue} from '../types/LoginFormValue';

export interface UserData {
  name: string;
  lastName: string;
  email: string;
  id: string;
  isPro: boolean;
}

export interface LoginState {
  user: UserData | null;
  errorCode: ErrorCode;
  isAuthenticated: boolean;
}

export const initialState: LoginState = {
  user: null,
  errorCode: null,
  isAuthenticated: false,
};

const loginUserSlice = createSlice({
  name: LOGIN_USER_KEY,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginUserStart: (state: LoginState, action: PayloadAction<LoginFormValue>): LoginState => ({
      ...state,
      errorCode: null,
      isAuthenticated: false,
    }),
    loginUserSuccess: (state: LoginState, action: PayloadAction<UserData>): LoginState => ({
      ...state,
      user: action.payload,
      errorCode: null,
      isAuthenticated: true,
    }),
    loginUserFail: (_, action): LoginState => ({
      user: initialState.user,
      errorCode: action.payload,
      isAuthenticated: initialState.isAuthenticated,
    }),
    logoutUserStart: (state: LoginState): LoginState => ({
      ...state,
      errorCode: null,
      isAuthenticated: true,
    }),
    logoutUserSuccess: (state: LoginState): LoginState => ({
      ...state,
      user: null,
      errorCode: null,
      isAuthenticated: false,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerUserStart: (state: LoginState, action: PayloadAction<RegisterFormValues>): LoginState => ({
      ...state,
      errorCode: null,
      isAuthenticated: false,
    }),
    registerUserSuccess: (state: LoginState, action: PayloadAction<UserData>): LoginState => ({
      ...state,
      user: action.payload,
      errorCode: null,
      isAuthenticated: true,
    }),
    registerUserFail: (_, action): LoginState => ({
      user: initialState.user,
      errorCode: action.payload,
      isAuthenticated: initialState.isAuthenticated,
    }),
  },
});

export const {
  loginUserStart: loginUserStartAction,
  loginUserSuccess: loginUserSuccessAction,
  loginUserFail: loginUserFailAction,
  logoutUserStart: logoutUserStartAction,
  logoutUserSuccess: logoutUserSuccessAction,
  registerUserStart: registerUserStartAction,
  registerUserSuccess: registerUserSuccessAction,
  registerUserFail: registerUserFailAction,
} = loginUserSlice.actions;

export default loginUserSlice.reducer;
