import {BillingInterval} from '@kolo/constants/constants';
import Icon from '@kolo/uiKit/Icons';
import RadioGroup from '@kolo/uiKit/RadioGroup/RadioGroup';
import React from 'react';

import useBillingPeriod from '../../hooks/useBillingPeriod';
import {options} from './BillingPeriodOptions';
import styles from './BillingPeriodSwitcher.module.scss';
const {sale, saleIcon, pricingOptions} = styles;

interface Props {
  onChange: (value: BillingInterval) => void;
}
const BillingPeriodSwitcher: React.FC<Props> = ({onChange}) => {
  const {selectedBillingInterval, setSelectedBillingInterval} = useBillingPeriod();

  const handleOnChange = (value: string) => {
    setSelectedBillingInterval(value as BillingInterval);
    onChange(value as BillingInterval);
  };

  return (
    <div className={pricingOptions}>
      <RadioGroup
        options={options}
        currentValue={selectedBillingInterval}
        onChange={handleOnChange}
      />
      <span className={sale}>
        <div className={saleIcon}>
          <Icon.Arrow />
        </div>
        Save 75%
      </span>
    </div>
  );
};

export default BillingPeriodSwitcher;
