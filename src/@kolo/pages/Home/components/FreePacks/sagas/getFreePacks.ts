import {getPacks} from '@kolo/facade/getPacks/getPacks';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {Pack} from '../../types/Pack';
import {getFreePacksFailAction, getFreePacksStartAction, getFreePacksSuccessAction} from '../slice/freePacksSlice';

interface getFreePacksResponse {
  data: Pack[];
}

export function* callGetFreePacksWorker() {
  try {
    //getPacks as any applied due to the PropTypes in facade and typescript incompatibility
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: getFreePacksResponse = yield call(getPacks as any, {pageSize: 3, free: true});
    yield put(getFreePacksSuccessAction(dataKeyAdapter(data) as Pack[]));
  } catch (error) {
    yield call(handleErrorInSagas, getFreePacksFailAction);
  }
}

export function* getFreePacksWatcher() {
  yield takeEvery(getFreePacksStartAction, callGetFreePacksWorker);
}
