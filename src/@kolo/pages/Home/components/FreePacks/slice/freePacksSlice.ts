import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Pack} from '../../types/Pack';
import {FREE_PACKS_KEY} from '../constants';

export interface FreePacksState {
  packs: Pack[];
}

const initialState: FreePacksState = {
  packs: [],
};

export const freePacksSlice = createSlice({
  name: FREE_PACKS_KEY,
  initialState,
  reducers: {
    getFreePacksStart: (state: FreePacksState): FreePacksState => ({
      ...state,
    }),
    getFreePacksSuccess: (state: FreePacksState, {payload}: PayloadAction<Pack[]>): FreePacksState => ({
      ...state,
      packs: payload,
    }),
    getFreePacksFail: (): FreePacksState => ({
      packs: initialState.packs,
    }),
  },
});

export const {
  getFreePacksStart: getFreePacksStartAction,
  getFreePacksSuccess: getFreePacksSuccessAction,
  getFreePacksFail: getFreePacksFailAction,
} = freePacksSlice.actions;

export default freePacksSlice.reducer;
