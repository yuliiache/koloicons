import {BillingInterval} from '@kolo/constants/constants';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PricingData, PricingState} from './types/pricingStateTypes';

export const PRICING_KEY = 'pricing';

const initialState: PricingState = {
  pricingPlans: [],
};

const pricingSlice = createSlice({
  name: PRICING_KEY,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPricingStart: (state: PricingState, action: PayloadAction<BillingInterval>): PricingState => ({
      ...state,
    }),
    getPricingSuccess: (state: PricingState, action: PayloadAction<PricingData[]>): PricingState => ({
      ...state,
      pricingPlans: action.payload,
    }),
    getPricingFail: (state: PricingState): PricingState => ({
      ...state,
      pricingPlans: initialState.pricingPlans,
    }),
  },
});

export const {getPricingStart, getPricingSuccess, getPricingFail} = pricingSlice.actions;

export default pricingSlice.reducer;
