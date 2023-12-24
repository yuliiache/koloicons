import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';

import {Select} from '../Select';

const selectOptions = ['first', 'second', 'third'];

describe('Select component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render snapshot successfuly', () => {
    const props = {
      label: 'Test select',
      name: 'test-select',
      options: selectOptions,
      onChange: jest.fn(),
    };
    const {asFragment} = render(<Select {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render all options inside when select has options', () => {
    const props = {
      label: 'Test select',
      name: 'test-select',
      options: selectOptions,
      onChange: jest.fn(),
    };

    render(<Select {...props} />);

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(selectOptions.length);
  });
});
