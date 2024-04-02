import {IconSize, IconStyle} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import {getIcons} from '@kolo/facade/getIcons/getIcons';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';

import {
  getIconsByQueryFailAction,
  getIconsByQueryStartAction,
  getIconsByQuerySuccessAction,
  getMoreIconsFailAction,
  getMoreIconsSuccessAction,
  IconByQuery,
  loadMoreIconsAction,
} from './iconSearchSlice';
import {getIconsByQuery} from './selectors';

interface InitialIcon {
  category: {
    name: string;
    number: number;
  };
  name: string;
  size: string;
  style: string[];
  _id: string;
}

interface Response {
  data: {
    icons: InitialIcon[];
    iconsLength: string;
  };
}

function* callGetIconsByQueryWorker(action: PayloadAction<string | null>) {
  try {
    const searchQuery = action.payload;
    yield put(setLoading(true));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: Response = yield call(getIcons as any, {
      pageSize: '24',
      currentPage: '1',
      categoryId: '',
      searchQuery: searchQuery,
      isFree: false,
      iconSize: IconSize.DETAILED,
      iconStyle: IconStyle.LINE,
    });

    const adaptedData = dataKeyAdapter(data.icons) as IconByQuery[];

    const totalIcons = parseInt(data.iconsLength, 10);
    const hasMore = adaptedData.length < totalIcons;

    yield put(getIconsByQuerySuccessAction({icons: adaptedData, hasMoreIcons: hasMore}));
  } catch (error) {
    yield call(handleErrorInSagas, getIconsByQueryFailAction);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getIconsByQueryWatcher() {
  yield takeEvery(getIconsByQueryStartAction.type, callGetIconsByQueryWorker);
}

function* callGetMoreIconsByQueryWorker(action: PayloadAction<string | null>) {
  try {
    const searchQuery = action.payload;
    const {currentPage} = yield select(getIconsByQuery);

    yield put(setLoading(true));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: Response = yield call(getIcons as any, {
      pageSize: '24',
      currentPage: (currentPage + 1).toString(),
      categoryId: '',
      searchQuery: searchQuery,
      isFree: false,
      iconSize: IconSize.DETAILED,
      iconStyle: IconStyle.LINE,
    });

    const adaptedData = dataKeyAdapter(data.icons) as IconByQuery[];

    const totalIcons: number = parseInt(data.iconsLength, 10);
    const hasMore: boolean = adaptedData.length * (currentPage + 1) < totalIcons;
    const nextPage: number = currentPage + 1;

    yield put(getMoreIconsSuccessAction({icons: adaptedData, hasMoreIcons: hasMore, currentPage: nextPage}));
  } catch (error) {
    yield call(handleErrorInSagas, getMoreIconsFailAction);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getMoreIconsByQueryWatcher() {
  yield takeEvery(loadMoreIconsAction.type, callGetMoreIconsByQueryWorker);
}
