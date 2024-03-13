import {render, screen} from '@testing-library/react';

import usePricing from '../hooks/usePricing';
import Pricing from '../Pricing';

jest.mock('../hooks/usePricing');

jest.mock('@kolo/pages/PricingPage/components/Pricing/components/BillingPeriodSwitcher/BillingPeriodSwitcher', () => {
  const MockBillingPeriodSwitcher = () => <div data-testid="BillingPeriodSwitcherComponent" />;
  return MockBillingPeriodSwitcher;
});
jest.mock('@kolo/pages/PricingPage/components/Pricing/components/PricingCardGallery/PricingCardGallery', () => {
  const MockPricingCardGallery = () => <div data-testid="PricingCardGalleryComponent" />;
  return MockPricingCardGallery;
});

describe('Pricing Component', () => {
  const mockPricing = [
    {
      'subscriptionPlan': 'Personal',
      'paymentId': 635769,
      'features': ['SVG format', 'PNG - all sizes', '2 styles', 'Unlimited downloads', 'Updates'],
      'options': {
        'price': 2.5,
        'currency': 'USD',
        'period': 'per month, $30 billed yearly',
      },
      'license': {
        'allowed': ['End products not for sale', 'One personal social media account with non-commercial activities'],
        'disallowed': [
          'Business social media accounts',
          'Physical or digital paid advertisements',
          'Native apps, web apps, or games',
          'Resell, share, sublicense, transfer or otherwise redistribute the icons (even for free or within a more complex downloadable file)',
          'Maximum of 100 per product',
          'Trademark and Logo',
        ],
      },
    },
  ];
  const usePricingHook = () =>
    usePricing.mockReturnValue({pricingPlans: mockPricing, handleBillingPeriodChange: jest.fn()});

  it('renders without crashing with data', () => {
    usePricingHook();
    render(<Pricing />);

    expect(screen.getByTestId('BillingPeriodSwitcherComponent')).toBeInTheDocument();
    expect(screen.getByTestId('PricingCardGalleryComponent')).toBeInTheDocument();
  });

  it('should render snapshot successfully', () => {
    usePricingHook();
    const {asFragment} = render(<Pricing />);

    expect(asFragment()).toMatchSnapshot();
  });
});
