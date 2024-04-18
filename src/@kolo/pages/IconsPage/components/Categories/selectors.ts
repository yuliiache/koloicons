import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {CATEGORIES_KEY, CategoriesState} from './slice/categoriesSlice';

export const getIconCategories: Selector<RootState, CategoriesState> = (state) => state[CATEGORIES_KEY];

export const iconCategoriesSelector: Selector<RootState, CategoriesState> = createSelector(
  getIconCategories,
  (categories: CategoriesState): CategoriesState => ({
    categoriesList: categories.categoriesList,
  })
);
