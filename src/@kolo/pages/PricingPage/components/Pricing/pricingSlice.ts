import {BillingInterval} from '@kolo/constants/constants';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PricingData, PricingState} from './types/pricingStateTypes';

export const PRICING_KEY = 'pricing';

const initialState: PricingState = {
  isLoading: false,
  pricingPlans: [],
};

const pricingSlice = createSlice({
  name: PRICING_KEY,
  initialState,
  reducers: {
    getPricingStart: (state: PricingState, action: PayloadAction<BillingInterval>): PricingState => ({
      ...state,
      isLoading: true,
    }),
    getPricingSuccess: (state: PricingState, action: PayloadAction<PricingData[]>): PricingState => ({
      ...state,
      pricingPlans: action.payload,
      isLoading: false,
    }),
    getPricingFail: (state: PricingState): PricingState => ({
      ...state,
      pricingPlans: initialState.pricingPlans,
      isLoading: false,
    }),
  },
});

export const {getPricingStart, getPricingSuccess, getPricingFail} = pricingSlice.actions;

export default pricingSlice.reducer;
