import React from 'react';
import {render} from '@testing-library/react';

import PanelAside from '../PanelAside';

const commonProps = {
  title: 'Categories',
  isOpened: false,
  openPanel: jest.fn(),
  closePanel: jest.fn(),
};

describe('PanelAside', () => {
  it('renders close aside correctly and matches snapshot', () => {
    const {asFragment} = render(<PanelAside {...commonProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders close aside with correctly title and matches snapshot', () => {
    const {asFragment} = render(
      <PanelAside
        {...commonProps}
        title="Collection"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders open aside correctly and matches snapshot', () => {
    const {asFragment} = render(
      <PanelAside
        {...commonProps}
        isOpened={true}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
