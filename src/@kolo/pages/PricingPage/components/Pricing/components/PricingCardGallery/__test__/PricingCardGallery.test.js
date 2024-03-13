import React from 'react';
import PricingCardGallery from '@kolo/pages/PricingPage/components/Pricing/components/PricingCardGallery/PricingCardGallery';
import {render} from '@testing-library/react';

import '@testing-library/jest-dom';
const singlePricingPlan = [
  {
    features: ['Feature 1', 'Feature 2'],
    license: {allowed: ['Option 1'], disallowed: ['Option 2']},
    options: {price: 10, currency: 'USD', period: 'month'},
    paymentId: 'plan1',
    subscriptionPlan: 'Basic',
  },
];

describe('PricingCardGallery', () => {
  it('renders a single pricing card for one pricing plan', () => {
    const {asFragment} = render(<PricingCardGallery pricingPlans={singlePricingPlan} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
