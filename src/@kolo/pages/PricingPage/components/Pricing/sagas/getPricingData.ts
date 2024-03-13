import {BillingInterval} from '@kolo/constants/constants';
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
    const billingInterval: BillingInterval = action.payload || BillingInterval.YEAR;
    const {data}: PricingResponse = yield call(getPricing, {billingInterval});
    yield put(getPricingSuccess(data));
  } catch {
    yield call(handleErrorInSagas, getPricingFail);
  }
}

export function* getPricingData() {
  yield takeEvery(getPricingStart.type, callGetPricingData);
}
