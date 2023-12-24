import {createSlice} from '@reduxjs/toolkit';

import {MONTH_PACK_KEY} from './constants';

const initialState = {
  isLoading: false,
  pack: [
    {
      id: '',
      name: '',
      number: 20,
      isFree: true,
      icons: [],
    },
  ],
};

const monthPackSlice = createSlice({
  name: MONTH_PACK_KEY,
  initialState,
  reducers: {
    getMonthPackStart: (state) => ({
      ...state,
      isLoading: true,
    }),
    getMonthPackSuccess: (state, action) => ({
      ...state,
      pack: action.payload,
    }),
    getMonthPackFail: () => ({
      pack: initialState.pack,
      isLoading: false,
    }),
  },
});

export const {getMonthPackStart, getMonthPackSuccess, getMonthPackFail} = monthPackSlice.actions;

export default monthPackSlice.reducer;
