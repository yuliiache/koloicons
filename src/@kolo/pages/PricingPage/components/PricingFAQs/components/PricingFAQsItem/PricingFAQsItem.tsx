import {FC} from 'react';

import {FaqsData as Props} from '../../types/FaqsData';
import styles from './PricingFAQsItem.module.scss';

const PricingFAQsItem: FC<Props> = ({question, answer}) => {
  return (
    <li className={styles.item}>
      <p className={styles.question}>{question}</p>
      <p>{answer}</p>
    </li>
  );
};

export default PricingFAQsItem;
