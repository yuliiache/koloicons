import {FC} from 'react';

import OptionList from '../OptionList/OptionList';
import styles from './SubscriptionDetails.module.scss';

interface SubscriptionDetailsProps {
  formats: string[];
  attribution: string;
  allowedOptions: string[];
  disallowedOptions: string[];
}

const SubscriptionDetails: FC<SubscriptionDetailsProps> = ({
  formats,
  attribution,
  allowedOptions,
  disallowedOptions,
}) => {
  const formattedFormats = formats && formats.map((format) => format).join(', ');

  return (
    <>
      <div className={styles.advantages}>
        <p className={styles.advantagesItem}>
          <span className={styles.itemTitle}>Formats:</span>
          <span className={styles.itemVal}>{formattedFormats}</span>
        </p>
        <p className={styles.advantagesItem}>
          <span className={styles.itemTitle}>Attribution:</span>
          <span className={styles.itemVal}>{attribution}</span>
        </p>
      </div>
      <dl className={styles.advantages}>
        <OptionList
          title="You can use icons for:"
          list={allowedOptions}
        />
        <OptionList
          title="You can not use icons for:"
          list={disallowedOptions}
        />
      </dl>
    </>
  );
};

export default SubscriptionDetails;
