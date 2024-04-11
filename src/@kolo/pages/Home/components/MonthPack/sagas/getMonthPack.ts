import {getPacks} from '@kolo/facade/getPacks/getPacks';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {Pack} from '../../types/Pack';
import {getMonthPackFailAction, getMonthPackStartAction, getMonthPackSuccessAction} from '../monthPackSlice';

interface getMonthPackPresponse {
  data: Pack[];
}

function* callGetMonthPackWorker() {
  try {
    //getPacks as any applied due to the PropTypes in facade and typescript incompatibility
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: getMonthPackPresponse = yield call(getPacks as any, {monthPack: true});
    yield put(getMonthPackSuccessAction(dataKeyAdapter(data) as Pack[]));
  } catch {
    yield call(handleErrorInSagas, getMonthPackFailAction);
  }
}

export function* getMonthPackWathcer() {
  yield takeEvery(getMonthPackStartAction, callGetMonthPackWorker);
}
