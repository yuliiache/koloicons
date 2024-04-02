import {IconSize, IconStyle} from '@kolo/constants/constants';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const ICON_SEARCH_KEY = 'searchIcons';

export interface IconByQuery {
  category: {
    name: string;
    number: number;
  };
  name: string;
  size: IconSize;
  style: IconStyle[];
  id: string;
}

interface GetIconsByQuerySuccessPayload {
  icons: IconByQuery[];
  hasMoreIcons: boolean;
}

export interface IconsByQueryState {
  icons: IconByQuery[];
  currentPage: number;
  hasMoreIcons: boolean;
}

export const initialState: IconsByQueryState = {
  icons: [],
  currentPage: 1,
  hasMoreIcons: false,
};

const iconSearchSlice = createSlice({
  name: ICON_SEARCH_KEY,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getIconsByQueryStart: (state: IconsByQueryState, action: PayloadAction<string | null>): IconsByQueryState => ({
      ...state,
      currentPage: initialState.currentPage,
      hasMoreIcons: initialState.hasMoreIcons,
    }),
    getIconsByQuerySuccess: (
      state: IconsByQueryState,
      action: PayloadAction<GetIconsByQuerySuccessPayload>
    ): IconsByQueryState => ({
      ...state,
      icons: action.payload.icons,
      currentPage: state.currentPage,
      hasMoreIcons: action.payload.hasMoreIcons,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getIconsByQueryFail: (_): IconsByQueryState => ({
      icons: initialState.icons,
      currentPage: initialState.currentPage,
      hasMoreIcons: initialState.hasMoreIcons,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadMoreIcons: (state: IconsByQueryState, action: PayloadAction<string | null>): IconsByQueryState => ({
      ...state,
    }),
    getMoreIconsSuccess: (state: IconsByQueryState, action: PayloadAction<IconsByQueryState>): IconsByQueryState => ({
      ...state,
      icons: [...state.icons, ...action.payload.icons],
      currentPage: action.payload.currentPage,
      hasMoreIcons: action.payload.hasMoreIcons,
    }),
    getMoreIconsFail: (state: IconsByQueryState): IconsByQueryState => ({
      ...state,
    }),
  },
});
export const {
  getIconsByQueryStart: getIconsByQueryStartAction,
  getIconsByQuerySuccess: getIconsByQuerySuccessAction,
  getIconsByQueryFail: getIconsByQueryFailAction,
  loadMoreIcons: loadMoreIconsAction,
  getMoreIconsSuccess: getMoreIconsSuccessAction,
  getMoreIconsFail: getMoreIconsFailAction,
} = iconSearchSlice.actions;

export default iconSearchSlice.reducer;
