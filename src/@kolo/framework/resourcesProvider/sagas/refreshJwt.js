import {getUpdatedUser} from '@kolo/facade';
import {loginUserSuccess} from '@kolo/pages/login';
import {httpService,writeJwt} from '@kolo/services';
import {call, put, takeEvery} from 'redux-saga/effects';

import {refreshJWT} from '../actions';

function* callRefreshJWTandLoginUser() {
  const tokenField = 'x-auth-token';

  const {data, headers} = yield call(getUpdatedUser);
  const token = headers[tokenField];

  yield put(loginUserSuccess(data));

  token && (yield call(httpService.addJwtToHeader, token));
  token && (yield call(writeJwt, token));
}

export function* refreshJWTandLoginUser() {
  yield takeEvery(refreshJWT, callRefreshJWTandLoginUser);
}
