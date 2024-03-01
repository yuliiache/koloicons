import {Feedback} from '@kolo/facade/getFeedbacks/types';
import {FC} from 'react';

import FeedbackItem from './components/FeedbackItem/FeedbackItem';
import styles from './FeedbacksList.module.scss';
import useFeedbacks from './useFeedbacks';

const FeedbacksList: FC = () => {
  const {feedbacks} = useFeedbacks();

  return (
    <section className={styles.feedbacks}>
      <div className={styles.feedbackContainer}>
        {feedbacks &&
          feedbacks.map((feedback: Feedback) => (
            <FeedbackItem
              key={feedback.name}
              name={feedback.name}
              text={feedback.text}
              company={feedback.company}
              avatarPath={feedback.avatarPath}
              url={feedback.url}
            />
          ))}
      </div>
    </section>
  );
};

export default FeedbacksList;
