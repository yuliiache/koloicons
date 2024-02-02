import React, {FC} from 'react';

import {LabelSize, LabelTheme} from '../../Label/constants';
import Label from '../../Label/Label';
import styles from './SubscriptionPlan.module.scss';

interface SubscriptionPlanProps {
  name: string;
  price: string;
  theme: LabelTheme;
  periodInfo: string;
}
const SubscriptionPlan: FC<SubscriptionPlanProps> = ({name, price, theme, periodInfo}) => {
  return (
    <>
      <Label
        text={name}
        theme={theme}
        size={LabelSize.LARGE}
      />
      <div className={styles.price}>
        <span className={styles.priceVal}>{price}</span>
        <span className={styles.priceDesc}>{periodInfo}</span>
      </div>
    </>
  );
};

export default SubscriptionPlan;
