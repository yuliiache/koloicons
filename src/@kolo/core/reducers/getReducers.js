import {FEEDBACKS_KEY} from '@kolo/pages/Home/components/Feedbacks/constants';
import feedbacksReducer from '@kolo/pages/Home/components/Feedbacks/feedbacksSlice';
import {MONTH_PACK_KEY} from '@kolo/pages/Home/components/MonthPack/constants';
import monthPackReducer from '@kolo/pages/Home/components/MonthPack/monthPackSlice';
import categoriesReducer, {CATEGORIES_KEY} from '@kolo/pages/IconsPage/components/Categories/slice/categoriesSlice';
import {LOGIN_USER_KEY} from '@kolo/pages/LoginPage/constants';
import loginReducer from '@kolo/pages/LoginPage/slices/loginUserSlice';
import pricingReducer, {PRICING_KEY} from '@kolo/pages/PricingPage/components/Pricing/pricingSlice';
import {PRICING_FAQS_KEY} from '@kolo/pages/PricingPage/components/PricingFAQs/constants';
import pricingFAQsReducer from '@kolo/pages/PricingPage/components/PricingFAQs/slice/pricingFAQsSlice';

import {LOADING_KEY} from '../common/constants';
import loadingReducer from '../common/loadingSlice';

const reducers = {
  [MONTH_PACK_KEY]: monthPackReducer,
  [FEEDBACKS_KEY]: feedbacksReducer,
  [PRICING_FAQS_KEY]: pricingFAQsReducer,
  [LOGIN_USER_KEY]: loginReducer,
  [PRICING_KEY]: pricingReducer,
  [LOADING_KEY]: loadingReducer,
  [CATEGORIES_KEY]: categoriesReducer,
  // ...
};

export const getReducers = () => ({...reducers});
