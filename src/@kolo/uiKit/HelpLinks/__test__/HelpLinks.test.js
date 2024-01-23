import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {INTERNAL_LINK_TEST_ID} from '@kolo/uiKit/Link/constants';
import {cleanup, render, screen} from '@testing-library/react';

import {HELP_LINKS} from '../HelpLinks';
import HelpLinks from '../HelpLinks';

describe('HelpLinks component', () => {
  afterEach(cleanup);

  it('should successfully render snapshot', () => {
    const {asFragment} = render(
      <MemoryRouter>
        <HelpLinks />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should successfully render with correct items', () => {
    render(
      <MemoryRouter>
        <HelpLinks />
      </MemoryRouter>
    );

    HELP_LINKS.forEach(({name, url}) => {
      const helpLink = screen.getByText(name);
      expect(helpLink).toBeInTheDocument();
      expect(helpLink.getAttribute('href')).toBe(url);
    });

    const helpLinks = screen.getAllByTestId(INTERNAL_LINK_TEST_ID);

    expect(helpLinks).toHaveLength(3);
  });
});
