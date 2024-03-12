import {AUTH_TOKEN_HEADER_KEY} from '@kolo/constants/constants';
import {getUpdatedUser} from '@kolo/facade/users/users';
import {loginUserSuccessAction} from '@kolo/pages/LoginPage/slices/loginUserSlice';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {httpService} from '@kolo/services/httpService/httpService';
import {writeJwt} from '@kolo/services/jwtService/jwtService';
import {call, put, takeEvery} from 'redux-saga/effects';

import {refreshJWT} from '../actions';

function* callRefreshJWTandLoginUser() {
  const {data, headers} = yield call(getUpdatedUser);
  const token = headers[AUTH_TOKEN_HEADER_KEY];

  const adaptedData = dataKeyAdapter(data);
  yield put(loginUserSuccessAction(adaptedData));

  token && (yield call(httpService.addJwtToHeader, token));
  token && (yield call(writeJwt, token));
}

export function* refreshJWTandLoginUser() {
  yield takeEvery(refreshJWT, callRefreshJWTandLoginUser);
}
