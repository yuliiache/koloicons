import {BillingInterval} from '@kolo/constants/constants';
import {useState} from 'react';

const useBillingPeriod = () => {
  const [selectedBillingInterval, setSelectedBillingInterval] = useState(BillingInterval.YEAR);

  return {
    selectedBillingInterval,
    setSelectedBillingInterval,
  };
};

export default useBillingPeriod;
