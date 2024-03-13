import React from 'react';

import BillingPeriodSwitcher from './components/BillingPeriodSwitcher/BillingPeriodSwitcher';
import PricingCardGallery from './components/PricingCardGallery/PricingCardGallery';
import usePricing from './hooks/usePricing';
import styles from './Pricing.module.scss';

const {pricing} = styles;

const Pricing: React.FC = () => {
  const {pricingPlans, handleBillingPeriodChange} = usePricing();

  return (
    <div className={pricing}>
      <BillingPeriodSwitcher onChange={handleBillingPeriodChange} />
      <PricingCardGallery pricingPlans={pricingPlans} />
    </div>
  );
};

export default Pricing;
