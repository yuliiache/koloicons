import {cleanup, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Features from '../Features';

describe('Features Component', () => {
  afterEach(cleanup);

  const commonProps = {
    planFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
  };

  it('renders snapshot', () => {
    const {asFragment} = render(<Features {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
