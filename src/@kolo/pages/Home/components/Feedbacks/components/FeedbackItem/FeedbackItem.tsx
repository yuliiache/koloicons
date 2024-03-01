import {Feedback} from '@kolo/facade/getFeedbacks/types';
import {IMG_URL} from '@kolo/services/helpers/constants';
import {Image} from '@kolo/uiKit/Image/Image';
import Link from '@kolo/uiKit/Link/Link';
import {FC} from 'react';

import {FEEDBACK_TEXT_TEST_ID} from './constants';
import styles from './FeedbackItem.module.scss';

const FeedbackItem: FC<Feedback> = ({name, text, company, avatarPath, url}) => {
  return (
    <div className={styles.feedbackItem}>
      <Image
        src={`${IMG_URL}/${avatarPath}`}
        width={56}
        height={56}
        alt={name}
      />
      <p
        className={styles.feedbackText}
        data-testid={FEEDBACK_TEXT_TEST_ID}
      >
        {text}
      </p>
      <span>
        <Link url={url}>{`${name}, ${company}`}</Link>
      </span>
    </div>
  );
};

export default FeedbackItem;
