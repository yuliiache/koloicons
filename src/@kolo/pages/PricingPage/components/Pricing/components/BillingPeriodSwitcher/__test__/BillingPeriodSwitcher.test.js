import React from 'react';
import {options} from '@kolo/pages/PricingPage/components/Pricing/components/BillingPeriodSwitcher/BillingPeriodOptions.ts';
import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import BillingPeriodSwitcher from '../BillingPeriodSwitcher';

describe('BillingPeriodSwitcher', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(<BillingPeriodSwitcher onChange={mockOnChange} />);
  });

  it('renders correctly', () => {
    options.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
    expect(screen.getByText(/save 75%/i)).toBeInTheDocument();
  });

  it('calls onChange prop with correct value when selection changes', () => {
    const newSelection = options[0].value;
    fireEvent.click(screen.getByLabelText(options[0].label));

    expect(mockOnChange).toHaveBeenCalledWith(newSelection);
  });

  it('renderes snapshot successfully', () => {
    const {asFragment} = render(<BillingPeriodSwitcher onChange={mockOnChange} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
