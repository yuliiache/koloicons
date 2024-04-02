import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {ICON_SEARCH_KEY, IconByQuery, IconsByQueryState} from './iconSearchSlice';

export const getIconsByQuery: Selector<RootState, IconsByQueryState> = (state) => state[ICON_SEARCH_KEY];

export const iconsByQuerySelector: Selector<RootState, IconByQuery[]> = createSelector(
  getIconsByQuery,
  (icons: IconsByQueryState): IconByQuery[] => icons.icons
);

export const hasMoreIconsSelector: Selector<RootState, boolean> = createSelector(
  getIconsByQuery,
  (icons: IconsByQueryState): boolean => icons.hasMoreIcons
);
