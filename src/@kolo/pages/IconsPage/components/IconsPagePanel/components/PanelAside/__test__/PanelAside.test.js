import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import store from 'app/store';

import PanelAside from '../PanelAside';

const commonProps = {
  title: 'Categories',
  isOpened: false,
  openPanel: jest.fn(),
  closePanel: jest.fn(),
};

describe('PanelAside', () => {
  it('renders close aside correctly and matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <PanelAside {...commonProps} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders close aside with correctly title and matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <PanelAside
          {...commonProps}
          title="Collection"
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders open aside correctly and matches snapshot', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <PanelAside
          {...commonProps}
          isOpened={true}
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
