import React from 'react';
import {render} from '@testing-library/react';

import IconsPageContent from '../IconsPageContent';

describe('IconsPageContent', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(<IconsPageContent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
