import {MONTH_PACK_KEY} from '@kolo/pages/Home/components/MonthPack/constants';
import monthPackReducer from '@kolo/pages/Home/components/MonthPack/monthPackSlice';

const reducers = {
  [MONTH_PACK_KEY]: monthPackReducer,
  // ...
};

export const getReducers = () => ({...reducers});
