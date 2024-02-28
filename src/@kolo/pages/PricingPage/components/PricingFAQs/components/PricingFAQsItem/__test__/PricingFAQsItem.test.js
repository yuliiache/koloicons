import {render} from '@testing-library/react';

import PricingFAQsItem from '../PricingFAQsItem';

describe('PricingFAQs component', () => {
  const mockProps = {
    question: 'Question',
    answer: 'Answer',
  };

  it('should render snapshot successfully', () => {
    const {asFragment} = render(<PricingFAQsItem {...mockProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
