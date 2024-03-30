import {Icon} from '@kolo/facade/getIcon/types';
import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {ICON_KEY} from './constants';

type IconSelectorState = Selector<RootState, Icon>;

const getIcon = (state: RootState) => state[ICON_KEY];

export const IconSelector: IconSelectorState = createSelector(getIcon, (selectedIcon) => selectedIcon.icon);
