import {refreshJWTandLoginUser} from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {watcherSagaFeedbacks} from '@kolo/pages/Home/components/Feedbacks/sagas/watcherSagaFeedbacks';
import {getFreePacksWatcher} from '@kolo/pages/Home/components/FreePacks/sagas/getFreePacks';
import {getMonthPackWathcer} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {getItemPacksWatcher} from '@kolo/pages/Home/components/PackItem/sagas/getPackItem';
import {getCategoriesWatcher} from '@kolo/pages/IconsPage/components/Categories/sagas/getCategories';
import {watcherSagaIcon} from '@kolo/pages/IconsPage/components/DownloadModal/sagas/watcherSagaIcon';
import {getIconsByQueryWatcher} from '@kolo/pages/IconsPage/components/IconsPageContent/IconsBySearch/sagas/getIconsByQuery';
import {getIconsByCategoryWatcher} from '@kolo/pages/IconsPage/components/IconsPageContent/IconsContent/sagas/getIconsByCategory';
import {loginUserWatcher} from '@kolo/pages/LoginPage/sagas/loginUser';
import {logoutUserWatcher} from '@kolo/pages/LoginPage/sagas/logoutUser';
import {getPricingData} from '@kolo/pages/PricingPage/components/Pricing/sagas/getPricingData';
import {getPricingFAQsWatcher} from '@kolo/pages/PricingPage/components/PricingFAQs/sagas/getPricingFAQs';
import {registerUserWatcher} from '@kolo/pages/RegisterPage/sagas/registerUser';
import {resetPasswordWatcher} from '@kolo/pages/ResetPasswordPage/sagas/resetPassword';
import {all, fork} from 'redux-saga/effects';

export function* rootSagas() {
  yield all(
    [
      getMonthPackWathcer,
      watcherSagaFeedbacks,
      getPricingFAQsWatcher,
      watcherSagaIcon,
      loginUserWatcher,
      logoutUserWatcher,
      getItemPacksWatcher,
      getFreePacksWatcher,
      registerUserWatcher,
      refreshJWTandLoginUser,
      getCategoriesWatcher,
      getPricingData,
      getIconsByQueryWatcher,
      resetPasswordWatcher,
      getIconsByCategoryWatcher,
      //...
    ].map(fork)
  );
}
