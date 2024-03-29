import {createSlice} from '@reduxjs/toolkit';

import {FEEDBACKS_KEY} from './constants';

const initialState = {
  feedbacks: [{avatarPath: '', company: '', name: '', text: '', url: ''}],
};

const feedbacksSlice = createSlice({
  name: FEEDBACKS_KEY,
  initialState,
  reducers: {
    getFeedbacksStart: (state) => ({
      ...state,
    }),
    getFeedbacksSuccess: (state, action) => ({
      ...state,
      feedbacks: action.payload,
    }),
    getFeedbacksFail: () => ({
      feedbacks: initialState.feedbacks,
    }),
  },
});

export const {getFeedbacksStart, getFeedbacksSuccess, getFeedbacksFail} = feedbacksSlice.actions;

export default feedbacksSlice.reducer;
