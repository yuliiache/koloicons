import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getFeedbacksStart} from './feedbacksSlice';
import {feedbacksSelector} from './selectors';

const useFeedbacks = () => {
  const feedbacks = useSelector(feedbacksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacksStart());
  }, [dispatch]);

  return {feedbacks};
};

export default useFeedbacks;
