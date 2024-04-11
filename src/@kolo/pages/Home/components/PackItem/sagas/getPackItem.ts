import {getPacks} from '@kolo/facade/getPacks/getPacks';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getPackFailAction, getPackStartAction, getPackSuccessAction} from '../slice/packItemSlice';
import {Pack} from '../types/Pack';

interface getPacksResponse {
  data: Pack[];
}

export function* callGetPacksWorker() {
  try {
    //getCategories as any applied due to the PropTypes in facade and typescript incompatibility
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: getPacksResponse = yield call(getPacks as any, {monthPack: true});
    yield put(getPackSuccessAction(dataKeyAdapter(data) as Pack[]));
  } catch (error) {
    yield call(handleErrorInSagas, getPackFailAction);
  }
}

export function* getItemPacksWatcher() {
  yield takeEvery(getPackStartAction, callGetPacksWorker);
}
