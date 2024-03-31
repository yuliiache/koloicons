import React from 'react';
import {render} from '@testing-library/react';

import IconsPagePanel from '../IconsPagePanel';

describe('IconsPagePanel', () => {
  it('renders correctly and matches snapshot', () => {
    const mockProps = {
      setIsLeftPanelOpen: jest.fn(),
      setIsRightPanelOpen: jest.fn(),
    };
    const {asFragment} = render(<IconsPagePanel {...mockProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
