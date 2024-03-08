import React from 'react';
import {render} from '@testing-library/react';

import PanelAside from '../PanelAside';

const commonProps = {
  title: 'Categories',
  isOpened: false,
  openPanel: jest.fn(),
  closePanel: jest.fn(),
};
const text = 'Child Component';
const ChildComponent = () => <div>{text}</div>;

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

  it('renders children when panel is open', () => {
    const {getByText} = render(
      <PanelAside
        {...commonProps}
        isOpened={true}
      >
        <ChildComponent />
      </PanelAside>
    );

    expect(getByText(text)).toBeInTheDocument();
  });

  it('does not render children when panel is closed', () => {
    const {queryByText} = render(
      <PanelAside {...commonProps}>
        <ChildComponent />
      </PanelAside>
    );

    expect(queryByText(text)).toBeNull();
  });
});
