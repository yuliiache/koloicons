import React from 'react';
import { cleanup,fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Checkbox} from "../Checkbox";

describe('Checkbox Component', () => {
  afterEach(() => {
    cleanup();
  }
  );

  it('basic render succeed', () => {
    const handleChange = jest.fn();
    const { asFragment } = render(<Checkbox id='testId' isChecked={false} onChange={handleChange} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('id');
    expect(asFragment()).toMatchSnapshot();
    }
  );

  it('handles isChecked state', () => {
    const handleChange = jest.fn();
    const { rerender, asFragment } = render(<Checkbox id='testId' isChecked={true} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(asFragment()).toMatchSnapshot();


      fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    rerender(<Checkbox id='testId' isChecked={true} onChange={handleChange} />);
    expect(checkbox).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
    }
  );

  it('triggers onChange event', () => {
    const handleChange = jest.fn();
    const { asFragment } = render(<Checkbox id='testId' isChecked={false} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
    }
  );

  it('respects isDisabled prop', () => {
    const handleChange = jest.fn();
    const { asFragment } = render(<Checkbox id='testId' isChecked={true} isDisabled={true} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();

    }
  );

  it('shows error message when hasError is true', () => {
    const handleChange = jest.fn();
    const { asFragment } = render(<Checkbox id='testId' isChecked={false} onChange={handleChange} hasError={true} />);
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
    }
  );
}
);
