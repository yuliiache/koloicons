import PricingCard from '@kolo/uiKit/PricingCard/PricingCard';
import React from 'react';

import styles from '../../Pricing.module.scss';
import {PricingData} from '../../types/pricingStateTypes';
import {formatPrice, getThemeForPlan} from './PricingUtils';

const {pricingCards} = styles;

const PricingCardGallery = ({pricingPlans}: {pricingPlans: PricingData[]}) => {
  return (
    <div className={pricingCards}>
      {pricingPlans.map(({features, license, options, paymentId, subscriptionPlan}) => (
        <PricingCard
          key={paymentId}
          name={subscriptionPlan}
          price={formatPrice(options.price, options.currency)}
          theme={getThemeForPlan(subscriptionPlan)}
          periodInfo={options.period}
          planFeatures={features}
          allowedOptions={license.allowed}
          disallowedOptions={license.disallowed}
        />
      ))}
    </div>
  );
};

export default PricingCardGallery;
