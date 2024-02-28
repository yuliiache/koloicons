import {FC} from 'react';

import PricingFAQsItem from './components/PricingFAQsItem/PricingFAQsItem';
import styles from './PricingFAQs.module.scss';
import {FaqsData} from './types/FaqsData';
import usePricingFAQs from './usePricingFAQs';

const PricingFAQs: FC = () => {
  const {faqsList} = usePricingFAQs();

  if (!faqsList || !faqsList.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <ul className={styles.list}>
          {faqsList.map(({question, answer}: FaqsData) => (
            <PricingFAQsItem
              key={question}
              question={question}
              answer={answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricingFAQs;
