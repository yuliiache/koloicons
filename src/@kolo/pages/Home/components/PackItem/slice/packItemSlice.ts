import {createSlice,PayloadAction} from '@reduxjs/toolkit';

import {PACK_ITEM_KEY} from '../constatnts';
import {Pack} from '../types/Pack';
import {PackIconState} from '../types/PackItemState';

const initialState: PackIconState = {
  pack: [],
};

const packItemSlice = createSlice({
  name: PACK_ITEM_KEY,
  initialState,
  reducers: {
    getPackStart: (state: PackIconState): PackIconState => ({
      ...state,
    }),
    getPackSuccess: (state: PackIconState, {payload}: PayloadAction<Pack[]>): PackIconState => ({
      ...state,
      pack: payload,
    }),
    getPackFail: (): PackIconState => ({
      pack: initialState.pack,
    }),
  },
});

export const {
  getPackFail: getPackFailAction,
  getPackStart: getPackStartAction,
  getPackSuccess: getPackSuccessAction,
} = packItemSlice.actions;
export default packItemSlice.reducer;
