import {IconWithCategory} from '@kolo/types/icon';
import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {ICON_CONTENT_KEY, IconsState} from '../slice/iconsContentSlice';

export const getIcons: Selector<RootState, IconsState> = (state) => state[ICON_CONTENT_KEY];

export const iconsContentSelector: Selector<RootState, IconWithCategory[]> = createSelector(
  getIcons,
  (icons: IconsState): IconWithCategory[] => icons.icons
);

export const hasMoreCategoriesSelector: Selector<RootState, boolean> = createSelector(
  getIcons,
  (icons: IconsState): boolean => icons.hasMore
);
