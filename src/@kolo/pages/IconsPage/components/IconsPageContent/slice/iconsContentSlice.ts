import {IconWithCategory} from '@kolo/types/icon';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const ICON_CONTENT_KEY = 'icons';

export interface IconsState {
  icons: IconWithCategory[];
  sequenceNumber: number;
  hasMore: boolean;
}

export const initialState: IconsState = {
  icons: [],
  sequenceNumber: 0,
  hasMore: false,
};

const iconsContentSlice = createSlice({
  name: ICON_CONTENT_KEY,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetIcons: (state: IconsState): IconsState => ({
      icons: initialState.icons,
      sequenceNumber: initialState.sequenceNumber,
      hasMore: initialState.hasMore,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getIconsStart: (state: IconsState, action: PayloadAction<string | null>): IconsState => ({
      ...state,
    }),
    getIconsSuccess: (state: IconsState, action: PayloadAction<IconsState>): IconsState => ({
      ...state,
      icons: [...state.icons, ...action.payload.icons],
      sequenceNumber: action.payload.sequenceNumber,
      hasMore: action.payload.hasMore,
    }),
    getIconsFail: (state: IconsState): IconsState => ({
      ...state,
    }),
    getIconsByCategoryStart: (state: IconsState): IconsState => ({
      ...state,
    }),
    getIconsByCategorySuccess: (state: IconsState, action: PayloadAction<IconsState>): IconsState => ({
      ...state,
      icons: [...state.icons, ...action.payload.icons],
      hasMore: action.payload.hasMore,
      sequenceNumber: action.payload.sequenceNumber,
    }),
    getIconsByCategoryFail: (state: IconsState): IconsState => ({
      ...state,
    }),
  },
});
export const {
  resetIcons: resetIconsAction,
  getIconsStart: getIconsStartAction,
  getIconsSuccess: getIconsSuccessAction,
  getIconsFail: getIconsFailAction,
  getIconsByCategoryStart: getIconsByCategoryStartAction,
  getIconsByCategorySuccess: getIconsByCategorySuccessAction,
  getIconsByCategoryFail: getIconsByCategoryFailAction,
} = iconsContentSlice.actions;

export default iconsContentSlice.reducer;
