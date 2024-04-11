import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {Pack} from '../types/Pack';
import {MONTH_PACK_KEY} from './constants';
import {MonthPackState} from './types/MonthPackState';

const getMonthPackSelector: Selector<RootState, MonthPackState> = (state) => state[MONTH_PACK_KEY];

export const monthPackSelector: Selector<RootState, Pack[]> = createSelector(
  getMonthPackSelector,
  (monthPackState: MonthPackState) => monthPackState.pack
);
