import {cleanup, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import SubscriptionDetails from '../SubscriptionDetails';

describe('SubscriptionDetails Component', () => {
  afterEach(cleanup);

  const commonProps = {
    allowedOptions: ['Option 1', 'Option 2', 'Option 3'],
    disallowedOptions: ['Option 4', 'Option 5', 'Option 6'],
  };

  it('renders snapshot', () => {
    const {asFragment} = render(<SubscriptionDetails {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
