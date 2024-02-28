import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PRICING_FAQS_KEY} from '../constants';
import {FaqsData} from '../types/FaqsData';

export interface FaqsState {
  faqsList: FaqsData[];
}

const initialState: FaqsState = {
  faqsList: [],
};

const pricingFAQsSlice = createSlice({
  name: PRICING_FAQS_KEY,
  initialState,
  reducers: {
    getPricingFAQsStart: (state: FaqsState): FaqsState => ({
      ...state,
    }),
    getPricingFAQsSuccess: (state: FaqsState, action: PayloadAction<FaqsData[]>): FaqsState => ({
      ...state,
      faqsList: action.payload,
    }),
    getPricingFAQsFail: (): FaqsState => ({
      faqsList: initialState.faqsList,
    }),
  },
});

export const {
  getPricingFAQsStart: getPricingFAQsStartAction,
  getPricingFAQsSuccess: getPricingFAQsSuccessAction,
  getPricingFAQsFail: getPricingFAQsFailAction,
} = pricingFAQsSlice.actions;

export default pricingFAQsSlice.reducer;
