import {IconSize, IconStyle} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import {getCategories} from '@kolo/facade/getCategories/getCategories';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {call, put, takeEvery} from 'redux-saga/effects';

import {
  CategoriesData,
  getIconCategoriesFailAction,
  getIconCategoriesStartAction,
  getIconCategoriesSuccessAction,
} from '../slice/categoriesSlice';

interface CategoriesInitialData {
  iconsAmount: {
    size48: number;
    size60: string;
  };
  name: string;
  styles: string[];
  _id: string;
}
interface CategoriesResponse {
  data: CategoriesInitialData[];
}

function* callGetCategoriesWorker() {
  try {
    yield put(setLoading(true));
    //getCategories as any applied due to the PropTypes in facade and typescript incompatibility
    const {data}: CategoriesResponse = yield call(getCategories as any, {
      iconSize: IconSize.DETAILED,
      iconStyle: IconStyle.LINE,
    });

    const adaptedData = dataKeyAdapter(data) as CategoriesData[];

    yield put(getIconCategoriesSuccessAction(adaptedData));
  } catch (error) {
    yield call(handleErrorInSagas, getIconCategoriesFailAction);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getCategoriesWatcher() {
  yield takeEvery(getIconCategoriesStartAction, callGetCategoriesWorker);
}
