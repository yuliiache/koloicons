import {httpService} from '@kolo/services/httpService/httpService';
import {removeJwt} from '@kolo/services/jwtService/jwtService';
import {put, takeEvery} from 'redux-saga/effects';

import {logoutUserStartAction, logoutUserSuccessAction} from '../slices/loginUserSlice';

function* callLogoutUserWorker() {
  yield put(logoutUserSuccessAction());
  removeJwt();
  httpService.removeJwtFromHeader();
}

export function* logoutUserWatcher() {
  yield takeEvery(logoutUserStartAction, callLogoutUserWorker);
}
