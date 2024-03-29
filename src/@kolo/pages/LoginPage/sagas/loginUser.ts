import {AUTH_TOKEN_HEADER_KEY} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import {login} from '@kolo/facade/auth/auth';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {httpService} from '@kolo/services/httpService/httpService';
import {writeJwt} from '@kolo/services/jwtService/jwtService';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {loginUserFailAction, loginUserStartAction, loginUserSuccessAction, UserData} from '../slices/loginUserSlice';
import {ErrorCode} from '../types/ErrorCode';
import {LoginFormValue} from '../types/LoginFormValue';

interface LoginUserResponse {
  data: UserData;
  headers: Record<string, string>;
}

type Login = (params: LoginFormValue) => Promise<UserData>;

function* callLoginUserWorker(action: PayloadAction<LoginFormValue>) {
  try {
    yield put(setLoading(true));
    const {email, password}: LoginFormValue = action.payload;

    const {data, headers}: LoginUserResponse = yield call(login as Login, {email, password});
    const token = headers[AUTH_TOKEN_HEADER_KEY];

    const adaptedData = dataKeyAdapter(data) as UserData;
    yield put(loginUserSuccessAction(adaptedData));

    if (token) {
      httpService.addJwtToHeader(token);
      writeJwt(token);
    }
  } catch (error: unknown) {
    const errorCode: ErrorCode | undefined = (error as AxiosError)?.response?.status;

    yield call(handleErrorInSagas, loginUserFailAction);
    yield put(loginUserFailAction(errorCode));
  } finally {
    yield put(setLoading(false));
  }
}

export function* loginUserWatcher() {
  yield takeEvery(loginUserStartAction, callLoginUserWorker);
}
