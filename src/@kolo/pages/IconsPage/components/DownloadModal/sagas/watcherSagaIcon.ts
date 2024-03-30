import {setLoading} from '@kolo/core/common/loadingSlice';
import getIcon from '@kolo/facade/getIcon/getIcon';
import {Icon} from '@kolo/facade/getIcon/types';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {PayloadAction} from '@reduxjs/toolkit';
import {SagaIterator} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getIconFail, getIconStart, getIconSuccess} from '../iconSlice';

interface GetIconStartPayload {
  iconId: string;
}

type GetIconStartAction = PayloadAction<GetIconStartPayload>;

function* workerSagaIcon(action: GetIconStartAction): SagaIterator {
  try {
    yield put(setLoading(true));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data} = yield call(getIcon as any, {iconId: action.payload, withTags: true});
    const adaptedData = dataKeyAdapter(data) as Icon;
    yield put(getIconSuccess(adaptedData));
  } catch (error: unknown) {
    yield put(setLoading(false));
    yield call(handleErrorInSagas, getIconFail);
  }
}

export function* watcherSagaIcon() {
  yield takeEvery(getIconStart.type, workerSagaIcon);
}
