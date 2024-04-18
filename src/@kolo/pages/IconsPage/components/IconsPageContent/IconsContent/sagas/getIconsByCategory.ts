import {IconSize, IconStyle} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import getIconsByCategory from '@kolo/facade/getIconsByCategory/getIconsByCategory';
import {iconCategoriesSelector} from '@kolo/pages/IconsPage/components/Categories/selectors';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {IconWithCategory} from '@kolo/types/icon';
import {call, put, select, takeEvery} from 'redux-saga/effects';

import {
  getIconsByCategoryFailAction,
  getIconsByCategoryStartAction,
  getIconsByCategorySuccessAction,
} from '../../slice/iconsContentSlice';
import {getIcons} from '../selectors';

interface Response {
  data: {
    icons: IconWithCategory[];
  };
}

function* getIconsByCategoryWorker() {
  try {
    yield put(setLoading(true));
    const {sequenceNumber} = yield select(getIcons);
    const {categoriesList} = yield select(iconCategoriesSelector);
    const nextCategoryNumber: number = sequenceNumber + 1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: Response = yield call(getIconsByCategory as any, {
      iconStyle: IconStyle.LINE,
      iconSize: IconSize.DETAILED,
      categorySequenceNumber: nextCategoryNumber,
      categoriesAmount: 1,
    });

    const adaptedData: IconWithCategory[] = dataKeyAdapter(data.icons) as IconWithCategory[];
    const hasMore: boolean = categoriesList.length > nextCategoryNumber;

    yield put(
      getIconsByCategorySuccessAction({
        icons: adaptedData,
        sequenceNumber: nextCategoryNumber,
        hasMore: hasMore,
      })
    );
  } catch (error) {
    yield call(handleErrorInSagas, getIconsByCategoryFailAction);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getIconsByCategoryWatcher() {
  yield takeEvery(getIconsByCategoryStartAction.type, getIconsByCategoryWorker);
}
