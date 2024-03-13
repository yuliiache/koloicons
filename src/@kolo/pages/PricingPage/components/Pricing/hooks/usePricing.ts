import {BillingInterval} from '@kolo/constants/constants';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {useEffect} from 'react';

import {getPricingStart} from '../pricingSlice';
import {pricingSelector} from '../selectors';
import {PricingData} from '../types/pricingStateTypes';

interface UsePricingReturn {
  pricingPlans: PricingData[];
  handleBillingPeriodChange: (interval: BillingInterval) => void;
}

const usePricing = (): UsePricingReturn => {
  const dispatch = useAppDispatch();
  const pricingPlans: PricingData[] = useAppSelector(pricingSelector);

  useEffect(() => {
    dispatch(getPricingStart(BillingInterval.YEAR));
  }, []);

  const handleBillingPeriodChange = (interval: BillingInterval): void => {
    dispatch(getPricingStart(interval));
  };

  return {pricingPlans, handleBillingPeriodChange};
};

export default usePricing;
