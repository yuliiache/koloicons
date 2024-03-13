import {RootState} from 'app/store';
import {createSelector} from 'reselect';

import {PRICING_KEY} from './pricingSlice';
import {PricingData, PricingState} from './types/pricingStateTypes';

const getPricing = (state: RootState): PricingState => state[PRICING_KEY];

export const pricingSelector = createSelector(
  getPricing,
  (pricing: PricingState): PricingData[] => pricing.pricingPlans
);
