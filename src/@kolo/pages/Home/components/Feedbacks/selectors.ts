import {Feedback} from '@kolo/facade/getFeedbacks/types';
import {RootState} from 'app/store';
import {createSelector, Selector} from 'reselect';

import {FEEDBACKS_KEY} from './constants';

type FeedbacksSelector = Selector<RootState, Feedback[]>;

const getFeedbacksList = (state: RootState) => state[FEEDBACKS_KEY];

export const feedbacksSelector: FeedbacksSelector = createSelector(
  getFeedbacksList,
  (feedbacksList) => feedbacksList.feedbacks
);
