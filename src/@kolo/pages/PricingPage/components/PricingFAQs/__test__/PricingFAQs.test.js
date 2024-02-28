import {render} from '@testing-library/react';

import PricingFAQs from '../PricingFAQs';
import usePricingFAQs from '../usePricingFAQs';

jest.mock('../usePricingFAQs.ts');

describe('PricingFAQs component', () => {
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
  const usePricingFAQsHook = () => usePricingFAQs.mockReturnValue({faqsList: mockFaqsList});

  it('should render correctly with pricing FAQs data', () => {
    usePricingFAQsHook();

    const {getByText} = render(<PricingFAQs />);

    mockFaqsList.forEach(({question, answer}) => {
      expect(getByText(question)).toBeInTheDocument();
      expect(getByText(answer)).toBeInTheDocument();
    });
  });

  it('should render snapshot successfully', () => {
    usePricingFAQsHook();
    const {asFragment} = render(<PricingFAQs />);

    expect(asFragment()).toMatchSnapshot();
  });
});
