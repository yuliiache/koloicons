import {LabelTheme} from '@kolo/uiKit/Label/constants';
import {cleanup, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import PricingCard from '../PricingCard';

describe('PricingCard Component', () => {
  afterEach(cleanup);

  const commonProps = {
    name: 'Personal',
    price: '$2.50',
    theme: LabelTheme.SUCCESS,
    periodInfo: 'per month, $30 billed yearly',
    planFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
    allowedOptions: ['Option 1', 'Option 2', 'Option 3'],
    disallowedOptions: ['Option 4', 'Option 5', 'Option 6'],
  };

  it('renders snapshot PricingCard component', () => {
    const {asFragment} = render(<PricingCard {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders PricingCard with correct content', () => {
    const {getByText} = render(<PricingCard {...commonProps} />);

    expect(getByText(commonProps.name)).toBeInTheDocument();
    expect(getByText(commonProps.price)).toBeInTheDocument();
    expect(getByText(commonProps.periodInfo)).toBeInTheDocument();

    commonProps.planFeatures.forEach((feature) => {
      expect(getByText(feature)).toBeInTheDocument();
    });

    commonProps.allowedOptions.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });

    commonProps.disallowedOptions.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
