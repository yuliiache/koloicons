import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

import {LOADING_KEY} from './constants';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
} as const;

const loading = createSlice({
  name: LOADING_KEY,
  initialState,
  reducers: {
    setLoading: (state: LoadingState, action: PayloadAction<boolean>): LoadingState => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

const loadingReducer = loading.reducer;

export const {setLoading} = loading.actions;

export default loadingReducer;
