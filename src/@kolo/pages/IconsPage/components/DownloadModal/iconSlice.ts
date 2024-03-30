import {Icon} from '@kolo/facade/getIcon/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ICON_KEY} from './constants';

const initialState: {
  iconId: string;
  icon: Icon;
} = {
  iconId: '',
  icon: {name: '', category: {name: '', number: 0, id: ''}, size: '', style: '', types: [], id: '', tags: []},
};

const iconSlice = createSlice({
  name: ICON_KEY,
  initialState,
  reducers: {
    getIconStart: (state, action: PayloadAction<string>) => ({
      ...state,
      iconId: action.payload,
    }),
    getIconSuccess: (state, action: PayloadAction<Icon>) => ({
      ...state,
      icon: action.payload,
    }),
    getIconFail: () => ({
      icon: initialState.icon,
      iconId: initialState.iconId,
    }),
  },
});

export const {getIconStart, getIconSuccess, getIconFail} = iconSlice.actions;

export default iconSlice.reducer;
