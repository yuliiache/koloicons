import {LabelTheme} from '@kolo/uiKit/Label/constants';
import PricingCard from '@kolo/uiKit/PricingCard/PricingCard';
import {FC} from 'react';

import styles from './PricingCardWrap.module.scss';

const PricingCardWrap: FC = () => {
  const commonProps = {
    name: 'Personal',
    price: '$2.50',
    theme: LabelTheme.SUCCESS,
    period: 'per month, $30 billed yearly',
    planFeatures: ['SVG format', 'PNG - all sizes', '2 styles', 'Unlimited downloads', 'Updates'],
    allowedOptions: ['End products not for sale', 'One personal social media account with non-commercial activities'],
    disallowedOptions: [
      'Business social media accounts',
      'Physical or digital paid advertisements',
      'Native apps, web apps, or games',
    ],
  };

  return (
    <div className={styles.pricingCardWrap}>
      <PricingCard
        name={commonProps.name}
        price={commonProps.price}
        theme={commonProps.theme}
        periodInfo={commonProps.period}
        planFeatures={commonProps.planFeatures}
        allowedOptions={commonProps.allowedOptions}
        disallowedOptions={commonProps.disallowedOptions}
      />
    </div>
  );
};

export default PricingCardWrap;
