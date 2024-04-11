import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Pack} from '../types/Pack';
import {MONTH_PACK_KEY} from './constants';
import {MonthPackState} from './types/MonthPackState';

const initialState: MonthPackState = {
  pack: [
    {
      id: '',
      name: '',
      number: 20,
      isFree: true,
      icons: [],
      isFreeMonthSet: true,
    },
  ],
};

const monthPackSlice = createSlice({
  name: MONTH_PACK_KEY,
  initialState,
  reducers: {
    getMonthPackStart: (state: MonthPackState): MonthPackState => ({
      ...state,
    }),
    getMonthPackSuccess: (state: MonthPackState, action: PayloadAction<Pack[]>): MonthPackState => ({
      ...state,
      pack: action.payload,
    }),
    getMonthPackFail: (): MonthPackState => ({
      pack: initialState.pack,
    }),
  },
});

export const {
  getMonthPackStart: getMonthPackStartAction,
  getMonthPackSuccess: getMonthPackSuccessAction,
  getMonthPackFail: getMonthPackFailAction,
} = monthPackSlice.actions;

export default monthPackSlice.reducer;
