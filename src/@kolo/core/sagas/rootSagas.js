import {refreshJWTandLoginUser} from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {watcherSagaFeedbacks} from '@kolo/pages/Home/components/Feedbacks/sagas/watcherSagaFeedbacks';
import {getMonthPack} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {getCategoriesWatcher} from '@kolo/pages/IconsPage/components/Categories/sagas/getCategories';
import {watcherSagaIcon} from '@kolo/pages/IconsPage/components/DownloadModal/sagas/watcherSagaIcon';
import {loginUserWatcher} from '@kolo/pages/LoginPage/sagas/loginUser';
import {logoutUserWatcher} from '@kolo/pages/LoginPage/sagas/logoutUser';
import {getPricingData} from '@kolo/pages/PricingPage/components/Pricing/sagas/getPricingData';
import {getPricingFAQsWatcher} from '@kolo/pages/PricingPage/components/PricingFAQs/sagas/getPricingFAQs';
import {registerUserWatcher} from '@kolo/pages/RegisterPage/sagas/registerUser';
import {all, fork} from 'redux-saga/effects';

import {
  getIconsByQueryWatcher,
  getMoreIconsByQueryWatcher,
} from '../../pages/IconsPage/components/IconsPagePanel/components/IconSearch/getIconsByQuery';

export function* rootSagas() {
  yield all(
    [
      getMonthPack,
      watcherSagaFeedbacks,
      getPricingFAQsWatcher,
      watcherSagaIcon,
      loginUserWatcher,
      logoutUserWatcher,
      registerUserWatcher,
      refreshJWTandLoginUser,
      getCategoriesWatcher,
      getPricingData,
      getIconsByQueryWatcher,
      getMoreIconsByQueryWatcher,
      //...
    ].map(fork)
  );
}
