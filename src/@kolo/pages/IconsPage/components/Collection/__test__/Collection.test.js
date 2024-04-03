import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import Collection from '../Collection';

describe('Collection component', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(
      <MemoryRouter>
        <Provider store={store}>
          <Collection />
        </Provider>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
