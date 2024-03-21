import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const CATEGORIES_KEY = 'categories';

export interface CategoriesData {
  iconsAmount: {
    size48: number;
    size60: string;
  };
  name: string;
  styles: string[];
  id: string;
}

export interface CategoriesState {
  categoriesList: CategoriesData[];
}

const initialState: CategoriesState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: CATEGORIES_KEY,
  initialState,
  reducers: {
    getIconCategoriesStartAction: (state: CategoriesState): CategoriesState => ({
      ...state,
    }),
    getIconCategoriesSuccessAction: (
      state: CategoriesState,
      action: PayloadAction<CategoriesData[]>
    ): CategoriesState => ({
      ...state,
      categoriesList: action.payload,
    }),
    getIconCategoriesFailAction: (state: CategoriesState): CategoriesState => ({
      ...state,
      categoriesList: initialState.categoriesList,
    }),
  },
});

export const {getIconCategoriesStartAction, getIconCategoriesSuccessAction, getIconCategoriesFailAction} =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
