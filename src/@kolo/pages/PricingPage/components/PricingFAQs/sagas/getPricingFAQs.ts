import getFaqs from '@kolo/facade/getFaqs/getFaqs';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {
  getPricingFAQsFailAction,
  getPricingFAQsStartAction,
  getPricingFAQsSuccessAction,
} from '../slice/pricingFAQsSlice';
import {FaqsData} from '../types/FaqsData';

interface FaqsResponse {
  data: FaqsData[];
}

function* callGetPricingFAQsWorker() {
  try {
    const {data}: FaqsResponse = yield call(getFaqs);
    yield put(getPricingFAQsSuccessAction(data));
  } catch (error) {
    yield call(handleErrorInSagas, getPricingFAQsFailAction);
  }
}

export function* getPricingFAQsWatcher() {
  yield takeEvery(getPricingFAQsStartAction, callGetPricingFAQsWorker);
}
