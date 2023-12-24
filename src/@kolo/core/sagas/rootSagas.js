// import refreshJWTandLoginUser from '@kolo/framework/resourcesProvider/sagas/refreshJwt';
import {getMonthPack} from '@kolo/pages/Home/components/MonthPack/sagas/getMonthPack';
import {all, fork} from 'redux-saga/effects';

export function* rootSagas() {
  yield all(
    [
      getMonthPack,
      // ...
      // refreshJWTandLoginUser,
    ].map(fork)
  );
}
