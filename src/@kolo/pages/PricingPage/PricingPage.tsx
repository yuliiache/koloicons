import {FC} from 'react';

import FeedbacksList from '../Home/components/Feedbacks/FeedbacksList';
import Pricing from './components/Pricing/Pricing';
import PricingFAQs from './components/PricingFAQs/PricingFAQs';
import PricingHeading from './components/PricingHeading/PricingHeading';

const PricingPage: FC = () => {
  return (
    <main>
      <PricingHeading />
      <Pricing />
      <FeedbacksList />
      <PricingFAQs />
    </main>
  );
};

export default PricingPage;
