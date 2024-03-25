import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import useFeedbacks from '@kolo/pages/Home/components/Feedbacks/useFeedbacks';
import {cleanup, render} from '@testing-library/react';
import store from 'app/store';

import usePricing from '../components/Pricing/hooks/usePricing';
import usePricingFAQs from '../components/PricingFAQs/usePricingFAQs';
import PricingPage from '../PricingPage';

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

const mockFeedbacks = [
  {
    name: 'John Doe',
    text: 'This is a sample feedback text.',
    company: 'Sample Company',
    avatarPath: 'avatar.jpg',
    url: 'https://example.com',
  },
  {
    name: 'Jane Smith',
    text: 'Another feedback text.',
    company: 'Another Company',
    avatarPath: 'avatar2.jpg',
    url: 'https://example.com',
  },
];

const mockFaqsList = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
];

jest.mock('../components/Pricing/hooks/usePricing.ts');
jest.mock('@kolo/pages/Home/components/Feedbacks/useFeedbacks');
jest.mock('../components/PricingFAQs/usePricingFAQs');

describe('Pricing page component', () => {
  afterEach(cleanup);
  const renderPage = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PricingPage />
        </BrowserRouter>
      </Provider>
    );

  it('should render snapshot successfully', () => {
    usePricing.mockReturnValue({pricingPlans: mockPricing, handleBillingPeriodChange: jest.fn()});
    usePricingFAQs.mockReturnValue({faqsList: mockFaqsList});
    useFeedbacks.mockReturnValue({feedbacks: mockFeedbacks});

    const {asFragment} = renderPage();

    expect(asFragment()).toMatchSnapshot();
  });
});
