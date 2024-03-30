import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

import TagList from '../TagList';

describe('TagList component', () => {
  const tags = ['Accounting', 'Accountant', 'Calculate', 'Calculation'];
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(
      <MemoryRouter>
        <TagList tags={tags} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
