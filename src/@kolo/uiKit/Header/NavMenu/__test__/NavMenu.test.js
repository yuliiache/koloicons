import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {cleanup, render} from '@testing-library/react';

import {NavMenuItem} from '../../constants';
import NavMenu from '../NavMenu';

describe('NavMenu component', () => {
  afterEach(cleanup);

  it('snapshot renders correctly', () => {
    const {asFragment} = render(
      <Router>
        <NavMenu />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('NavMenu renders correctly with NavMenuItem', () => {
    const {getByText} = render(
      <Router>
        <NavMenu />
      </Router>
    );

    Object.values(NavMenuItem).forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });
});
