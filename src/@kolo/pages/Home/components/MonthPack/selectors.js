import {createSelector} from 'reselect';

import {MONTH_PACK_KEY} from './constants';

const getMonthPack = (state) => state[MONTH_PACK_KEY];

export const monthPackSelector = createSelector(getMonthPack, (monthPack) => monthPack.pack);
