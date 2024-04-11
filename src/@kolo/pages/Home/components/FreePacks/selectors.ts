import {RootState} from 'app/store';
import {createSelector,Selector} from 'reselect';

import {Pack} from '../types/Pack';
import {FREE_PACKS_KEY} from './constants';
import {FreePacksState} from './slice/freePacksSlice';

const getFreePacksSelector: Selector<RootState, FreePacksState> = (state) => state[FREE_PACKS_KEY];

export const freePacksSelector: Selector<RootState, Pack[]> = createSelector(
  getFreePacksSelector,
  (freePacksState: FreePacksState) => freePacksState.packs
);
