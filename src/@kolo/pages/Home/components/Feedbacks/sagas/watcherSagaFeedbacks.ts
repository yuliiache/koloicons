import {setLoading} from '@kolo/core/common/loadingSlice';
import {getFeedbacks} from '@kolo/facade/getFeedbacks/getFeedbacks';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getFeedbacksFail, getFeedbacksStart, getFeedbacksSuccess} from '../feedbacksSlice';

function* workerSageFeedbacks() {
  try {
    yield put(setLoading(true));
    const {data} = yield call(getFeedbacks);
    yield put(getFeedbacksSuccess(data));
  } catch {
    yield call(handleErrorInSagas, getFeedbacksFail);
  } finally {
    yield put(setLoading(false));
  }
}

export function* watcherSagaFeedbacks() {
  yield takeEvery(getFeedbacksStart, workerSageFeedbacks);
}
