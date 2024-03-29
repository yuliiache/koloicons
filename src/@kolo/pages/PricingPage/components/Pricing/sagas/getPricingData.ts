import {BillingInterval} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import getPricing from '@kolo/facade/getPricing/getPricing';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';

import {getPricingFail, getPricingStart, getPricingSuccess} from '../pricingSlice';
import {PricingData} from '../types/pricingStateTypes';

interface PricingResponse {
  data: PricingData[];
}

function* callGetPricingData(action: PayloadAction<BillingInterval>) {
  try {
    yield put(setLoading(true));
    const billingInterval: BillingInterval = action.payload || BillingInterval.YEAR;
    const {data}: PricingResponse = yield call(getPricing, {billingInterval});
    yield put(getPricingSuccess(data));
  } catch {
    yield call(handleErrorInSagas, getPricingFail);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getPricingData() {
  yield takeEvery(getPricingStart.type, callGetPricingData);
}
