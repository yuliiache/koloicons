import {setLoading} from '@kolo/core/common/loadingSlice';
import {resetPassword} from '@kolo/facade/users/users';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

import type {Message} from '../slice/resetPasswordSlice';
import type {ResetPasswordDto} from '../slice/resetPasswordSlice';
import {
  resetPasswordFailAction,
  resetPasswordStartAction,
  resetPasswordSuccessAction,
} from '../slice/resetPasswordSlice';
import {ErrorCode} from '../types/errorCode';

type ResetPassword = (dto: ResetPasswordDto) => Promise<Message>;

function* callResetPasswordWorker(action: PayloadAction<ResetPasswordDto>) {
  try {
    yield put(setLoading(true));
    const {newPassword, passwordResetToken}: ResetPasswordDto = action.payload;
    const {data}: {data: Message} = yield call(resetPassword as ResetPassword, {newPassword, passwordResetToken});

    yield put(resetPasswordSuccessAction(data));
  } catch (error: unknown) {
    const errorCode: ErrorCode | undefined = (error as AxiosError)?.response?.status;
    yield call(handleErrorInSagas, resetPasswordFailAction);
    yield put(resetPasswordFailAction(errorCode));
  } finally {
    yield put(setLoading(false));
  }
}

export function* resetPasswordWatcher() {
  yield takeEvery(resetPasswordStartAction.type, callResetPasswordWorker);
}
