import React from 'react';
import {render} from '@testing-library/react';

import IconsPagePanel from '../IconsPagePanel';

describe('IconsPagePanel', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(<IconsPagePanel />);

    expect(asFragment()).toMatchSnapshot();
  });
});
