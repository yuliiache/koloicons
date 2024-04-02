import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import IconsPagePanel from '../IconsPagePanel';

describe('IconsPagePanel', () => {
  it('renders correctly and matches snapshot', () => {
    const mockProps = {
      setIsLeftPanelOpen: jest.fn(),
      setIsRightPanelOpen: jest.fn(),
    };
    const {asFragment} = render(
      <BrowserRouter>
        <IconsPagePanel {...mockProps}/>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
