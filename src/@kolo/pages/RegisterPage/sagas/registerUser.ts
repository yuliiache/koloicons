import {AUTH_TOKEN_HEADER_KEY} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import {registerUser} from '@kolo/facade/users/users';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {httpService} from '@kolo/services/httpService/httpService';
import {writeJwt} from '@kolo/services/jwtService/jwtService';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import {
  registerUserFailAction,
  registerUserStartAction,
  registerUserSuccessAction,
  UserData,
} from '../../LoginPage/slices/loginUserSlice';
import {ErrorCode} from '../../LoginPage/types/ErrorCode';
import {RegisterFormValues} from '../components/RegisterForm/types/RegisterFormValues';

interface RegisterUserResponse {
  data: UserData;
  headers: Record<string, string>;
}

function* callRegisterUserWorker(action: PayloadAction<RegisterFormValues>) {
  try {
    yield put(setLoading(true));

    const {email, password, firstName, lastName} = action.payload;
    const {data, headers}: RegisterUserResponse = yield call(registerUser, {
      email,
      password,
      name: firstName,
      lastName,
    });

    const token = headers[AUTH_TOKEN_HEADER_KEY];

    const adaptedData = dataKeyAdapter(data) as UserData;
    yield put(registerUserSuccessAction(adaptedData));

    if (token) {
      httpService.addJwtToHeader(token);
      writeJwt(token);
    }
  } catch (error: unknown) {
    const errorCode: ErrorCode | undefined = (error as AxiosError)?.response?.status;

    yield call(handleErrorInSagas, registerUserFailAction);
    yield put(registerUserFailAction(errorCode));
  } finally {
    yield put(setLoading(false));
  }
}

export function* registerUserWatcher() {
  yield takeEvery(registerUserStartAction, callRegisterUserWorker);
}
