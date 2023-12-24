import {getPacks} from '@kolo/facade/getPacks/getPacks';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getMonthPackFail, getMonthPackStart, getMonthPackSuccess} from '../monthPackSlice';

function* callGetMonthPack() {
  try {
    const {data} = yield call(getPacks, {monthPack: true});
    yield put(getMonthPackSuccess(data));
  } catch {
    yield call(handleErrorInSagas, getMonthPackFail);
  }
}

export function* getMonthPack() {
  yield takeEvery(getMonthPackStart, callGetMonthPack);
}
