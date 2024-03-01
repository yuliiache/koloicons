import { FEEDBACKS_KEY } from '@kolo/pages/Home/components/Feedbacks/constants';
import feedbacksReducer from '@kolo/pages/Home/components/Feedbacks/feedbacksSlice'
import {MONTH_PACK_KEY} from '@kolo/pages/Home/components/MonthPack/constants';
import monthPackReducer from '@kolo/pages/Home/components/MonthPack/monthPackSlice';
import {PRICING_FAQS_KEY} from '@kolo/pages/PricingPage/components/PricingFAQs/constants';
import pricingFAQsReducer from '@kolo/pages/PricingPage/components/PricingFAQs/slice/pricingFAQsSlice';

const reducers = {
  [MONTH_PACK_KEY]: monthPackReducer,
  [FEEDBACKS_KEY]: feedbacksReducer,
  [PRICING_FAQS_KEY]: pricingFAQsReducer,
  // ...
};

export const getReducers = () => ({...reducers});
