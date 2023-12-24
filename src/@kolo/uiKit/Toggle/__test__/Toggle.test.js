import React from 'react';
import {cleanup, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {TOGGLE_TEST_ID} from '../constants';
import {Toggle} from '../Toggle';

describe('Toggle', () => {
  afterEach(() => cleanup());

  it('should render snapshot successfuly', () => {
    const props = {
      name: 'toggle',
      onChange: jest.fn(),
    };

    const {asFragment} = render(<Toggle {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have "checked" attribute as false when toggle is off', () => {
    const props = {
      isChecked: false,
      name: 'toggle',
      onChange: jest.fn(),
    };

    render(<Toggle {...props} />);

    const toggle = screen.getByTestId(TOGGLE_TEST_ID);

    expect(toggle.checked).toBe(false);
  });

  it('should have "checked" attribute as true when toggle is on', () => {
    const props = {
      isChecked: true,
      name: 'toggle',
      onChange: jest.fn(),
    };

    render(<Toggle {...props} />);

    const toggle = screen.getByTestId(TOGGLE_TEST_ID);

    expect(toggle.checked).toBe(true);
  });

  it('should have "disabled" attribute as false when toggle is not disabled', () => {
    const props = {
      isDisabled: false,
      name: 'toggle',
      onChange: jest.fn(),
    };

    render(<Toggle {...props} />);

    const toggle = screen.getByTestId(TOGGLE_TEST_ID);

    expect(toggle).not.toHaveAttribute('disabled');
  });

  it('should have "disabled" attribute as true when toggle is disabled', () => {
    const props = {
      isDisabled: true,
      name: 'toggle',
      onChange: jest.fn(),
    };

    render(<Toggle {...props} />);

    const toggle = screen.getByTestId(TOGGLE_TEST_ID);

    expect(toggle).toHaveAttribute('disabled');
  });

  it('should call onChange function from props when toggle was switched', async () => {
    const onChange = jest.fn();
    const props = {
      name: 'toggle',
      onChange,
    };

    render(<Toggle {...props} />);

    const toggle = screen.getByTestId(TOGGLE_TEST_ID);
    userEvent.click(toggle);

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });
});
