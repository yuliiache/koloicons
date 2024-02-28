// import refreshJWTandLoginUser from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {getMonthPack} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {getPricingFAQsWatcher} from '@kolo/pages/PricingPage/components/PricingFAQs/sagas/getPricingFAQs';
import {all, fork} from 'redux-saga/effects';

export function* rootSagas() {
  yield all(
    [
      getMonthPack,
      getPricingFAQsWatcher,
      // ...
      // refreshJWTandLoginUser,
    ].map(fork)
  );
}
