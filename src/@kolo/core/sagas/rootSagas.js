import {refreshJWTandLoginUser} from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {watcherSagaFeedbacks} from '@kolo/pages/Home/components/Feedbacks/sagas/watcherSagaFeedbacks';
import {getMonthPack} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {loginUserWatcher} from '@kolo/pages/LoginPage/sagas/loginUser';
import {logoutUserWatcher} from '@kolo/pages/LoginPage/sagas/logoutUser';
import {getPricingData} from '@kolo/pages/PricingPage/components/Pricing/sagas/getPricingData';
import {getPricingFAQsWatcher} from '@kolo/pages/PricingPage/components/PricingFAQs/sagas/getPricingFAQs';
import {registerUserWatcher} from '@kolo/pages/RegisterPage/sagas/registerUser';
import {all, fork} from 'redux-saga/effects';

export function* rootSagas() {
  yield all(
    [
      getMonthPack,
      watcherSagaFeedbacks,
      getPricingFAQsWatcher,
      loginUserWatcher,
      logoutUserWatcher,
      registerUserWatcher,
      // ...
      refreshJWTandLoginUser,
      getPricingData,
      // refreshJWTandLoginUser,
    ].map(fork)
  );
}
