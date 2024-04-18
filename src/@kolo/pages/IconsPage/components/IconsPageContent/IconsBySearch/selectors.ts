import {IconWithCategory} from '@kolo/types/icon';
import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {ICON_CONTENT_KEY, IconsState} from '../slice/iconsContentSlice';

export const getIconsByQuery: Selector<RootState, IconsState> = (state) => state[ICON_CONTENT_KEY];

export const iconsByQuerySelector: Selector<RootState, IconWithCategory[]> = createSelector(
  getIconsByQuery,
  (icons: IconsState): IconWithCategory[] => icons.icons
);

export const hasMoreIconsSelector: Selector<RootState, boolean> = createSelector(
  getIconsByQuery,
  (icons: IconsState): boolean => icons.hasMore
);
