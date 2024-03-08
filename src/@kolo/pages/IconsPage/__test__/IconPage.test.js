import React from 'react';
import {render} from '@testing-library/react';

import IconsPage from '../IconsPage';

describe('IconsPage', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(<IconsPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
