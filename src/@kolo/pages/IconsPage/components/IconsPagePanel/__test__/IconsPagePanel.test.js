import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import IconsPagePanel from '../IconsPagePanel';

describe('IconsPagePanel', () => {
  it('renders correctly and matches snapshot', () => {
    const mockProps = {
      setIsLeftPanelOpen: jest.fn(),
      setIsRightPanelOpen: jest.fn(),
    };
    const {asFragment} = render(
      <BrowserRouter>
       <Provider store={store}>
        <IconsPagePanel {...mockProps}/>
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
