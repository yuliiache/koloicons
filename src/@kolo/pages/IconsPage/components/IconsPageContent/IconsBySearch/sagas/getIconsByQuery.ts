import {IconSize, IconStyle} from '@kolo/constants/constants';
import {setLoading} from '@kolo/core/common/loadingSlice';
import {getIcons} from '@kolo/facade/getIcons/getIcons';
import {dataKeyAdapter} from '@kolo/services/helpers/dataKeyAdapter';
import {handleErrorInSagas} from '@kolo/services/helpers/handleErrorInSagas';
import {IconWithCategory} from '@kolo/types/icon';
import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';

import {getIconsFailAction, getIconsStartAction, getIconsSuccessAction} from '../../slice/iconsContentSlice';
import {getIconsByQuery} from '../selectors';

export interface IconByQuery {
  category: {
    name: string;
    number: number;
  };
  name: string;
  size: IconSize;
  style: IconStyle[];
  id: string;
}

interface Response {
  data: {
    icons: IconByQuery[];
    iconsLength: string;
  };
}

// getPreferredStyle is used to work around the backend problem: returning the array of styles instead of string
function getPreferredStyle(styles: IconStyle[]): IconStyle {
  const preferredOrder = ['line', 'solid'];
  return styles.find((style) => preferredOrder.includes(style)) || styles[0];
}

function* callGetIconsByQueryWorker(action: PayloadAction<string | null>) {
  try {
    const searchQuery = action.payload;
    const {sequenceNumber} = yield select(getIconsByQuery);
    const nextPage: number = sequenceNumber + 1;

    yield put(setLoading(true));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {data}: Response = yield call(getIcons as any, {
      pageSize: '24',
      currentPage: nextPage.toString(),
      categoryId: '',
      searchQuery: searchQuery,
      isFree: false,
      iconSize: IconSize.DETAILED,
      iconStyle: IconStyle.LINE,
    });

    const icons: IconByQuery[] = dataKeyAdapter(data.icons) as IconByQuery[];

    const adaptedData = icons.map((icon: IconByQuery) => {
      if (Array.isArray(icon.style) && icon.style.length) {
        const preferredStyle = getPreferredStyle(icon.style);
        return {...icon, style: preferredStyle};
      }
      return icon;
    }) as IconWithCategory[];

    const totalIcons: number = parseInt(data.iconsLength, 10);
    const hasMore: boolean = 24 * nextPage < totalIcons;

    yield put(getIconsSuccessAction({icons: adaptedData, hasMore: hasMore, sequenceNumber: nextPage}));
  } catch (error) {
    yield call(handleErrorInSagas, getIconsFailAction);
  } finally {
    yield put(setLoading(false));
  }
}

export function* getIconsByQueryWatcher() {
  yield takeEvery(getIconsStartAction.type, callGetIconsByQueryWorker);
}
