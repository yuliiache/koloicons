import {LabelTheme} from '@kolo/uiKit/Label/constants';
import {cleanup, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import SubscriptionPlan from '../SubscriptionPlan';

describe('SubscriptionPlan Component', () => {
  afterEach(cleanup);

  const commonProps = {
    name: 'Personal',
    price: '$2.50',
    theme: LabelTheme.SUCCESS,
    period: 'per month, $30 billed yearly',
  };

  it('renders snapshot', () => {
    const {asFragment} = render(<SubscriptionPlan {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
