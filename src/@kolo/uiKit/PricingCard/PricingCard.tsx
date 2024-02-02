import {FC} from 'react';

import Button from '../Button/Button';
import {ButtonSize} from '../Button/constants';
import {LabelTheme} from '../Label/constants';
import Features from './Features/Features';
import styles from './PricingCard.module.scss';
import SubscriptionDetails from './SubscriptionDetails/SubscriptionDetails';
import SubscriptionPlan from './SubscriptionPlan/SubscriptionPlan';

interface PricingCardProps {
  name: string;
  price: string;
  theme: LabelTheme;
  periodInfo: string;
  planFeatures: string[];
  allowedOptions: string[];
  disallowedOptions: string[];
}

const PricingCard: FC<PricingCardProps> = ({
  name,
  price,
  theme,
  periodInfo,
  planFeatures,
  allowedOptions,
  disallowedOptions,
}) => {
  const purchaseHandle = () => {
    console.log(`The Purchase button was clicked with the next subscription plan: ${planFeatures}`);
  };

  return (
    <div className={styles.card}>
      <SubscriptionPlan
        name={name}
        price={price}
        theme={theme}
        periodInfo={periodInfo}
      />
      <Features planFeatures={planFeatures} />
      <Button
        text="Purchase"
        size={ButtonSize.FULL_WIDTH}
        onClick={purchaseHandle}
      />
      <SubscriptionDetails
        formats={['PNG', 'SVG']}
        attribution="No attribution required"
        allowedOptions={allowedOptions}
        disallowedOptions={disallowedOptions}
      />
    </div>
  );
};

export default PricingCard;
