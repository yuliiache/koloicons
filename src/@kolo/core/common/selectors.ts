import {RootState} from 'app/store';
import {Selector} from 'react-redux';

import {LOADING_KEY} from './constants';
import {LoadingState} from './loadingSlice';

export const loadingSelector: Selector<RootState, LoadingState> = (state) => state[LOADING_KEY];
