import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {PACK_ITEM_KEY} from './constatnts';
import {Pack} from './types/Pack';
import {PackIconState} from './types/PackItemState';

const getPackItemSelector: Selector<RootState, PackIconState> = (state) => state[PACK_ITEM_KEY];

export const packItemSelector: Selector<RootState, Pack[]> = createSelector(
  getPackItemSelector,
  (packItemState: PackIconState): Pack[] => packItemState.pack
);
