import {useAppDispatch, useAppSelector} from 'app/hooks';
import {useEffect} from 'react';

import {pricingFAQsSelector} from './selectors';
import {getPricingFAQsStartAction} from './slice/pricingFAQsSlice';
import {FaqsData} from './types/FaqsData';

interface PricingFAQsHookReturn {
  faqsList: FaqsData[];
}

const usePricingFAQs = (): PricingFAQsHookReturn => {
  const faqsList: FaqsData[] = useAppSelector(pricingFAQsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPricingFAQsStartAction());
  }, []);

  return {faqsList};
};

export default usePricingFAQs;
