import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import IconsPage from '../IconsPage';

describe('IconsPage', () => {
  const renderPage = () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <IconsPage />
        </Provider>
      </BrowserRouter>
    );
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = renderPage();

    expect(asFragment()).toMatchSnapshot();
  });
});
