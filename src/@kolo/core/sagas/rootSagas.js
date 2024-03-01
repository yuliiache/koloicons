// import refreshJWTandLoginUser from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {watcherSagaFeedbacks} from '@kolo/pages/Home/components/Feedbacks/sagas/watcherSagaFeedbacks';
import {getMonthPack} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {getPricingFAQsWatcher} from '@kolo/pages/PricingPage/components/PricingFAQs/sagas/getPricingFAQs';
import {all, fork} from 'redux-saga/effects';

export function* rootSagas() {
  yield all(
    [
      getMonthPack,
      watcherSagaFeedbacks,
      getPricingFAQsWatcher,
      // ...
      // refreshJWTandLoginUser,
    ].map(fork)
  );
}
