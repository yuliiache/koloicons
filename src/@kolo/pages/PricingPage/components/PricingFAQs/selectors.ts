import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {PRICING_FAQS_KEY} from './constants';
import {FaqsState} from './slice/pricingFAQsSlice';
import {FaqsData} from './types/FaqsData';

const getPricingFAQs: Selector<RootState, FaqsState> = (state) => state[PRICING_FAQS_KEY];

export const pricingFAQsSelector: Selector<RootState, FaqsData[]> = createSelector(
  getPricingFAQs,
  (pricingFAQs: FaqsState): FaqsData[] => pricingFAQs.faqsList
);
