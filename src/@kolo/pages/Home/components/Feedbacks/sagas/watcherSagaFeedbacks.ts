import {getFeedbacks} from '@kolo/facade/getFeedbacks/getFeedbacks';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getFeedbacksFail, getFeedbacksStart, getFeedbacksSuccess} from '../feedbacksSlice';

function* workerSageFeedbacks() {
  try {
    const {data} = yield call(getFeedbacks);
    yield put(getFeedbacksSuccess(data));
  } catch {
    yield call(handleErrorInSagas, getFeedbacksFail);
  }
}

export function* watcherSagaFeedbacks() {
  yield takeEvery(getFeedbacksStart, workerSageFeedbacks);
}
