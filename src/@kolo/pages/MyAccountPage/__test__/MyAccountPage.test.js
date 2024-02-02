import React from 'react';
import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import MyAccountPage from '../MyAccountPage';

const mockUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@mail.com',
};

describe('MyAccountPage Component', () => {
  it('renders correctly and matches snapshot', () => {
    const {asFragment} = render(<MyAccountPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the decorative circle with the first letter of the firstName', () => {
    render(<MyAccountPage />);
    const firstLetterElement = screen.getByText(mockUser.firstName.charAt(0));
    expect(firstLetterElement).toBeInTheDocument();
    expect(firstLetterElement).toHaveClass('circle');
  });

  it('displays the correct first name and email', () => {
    render(<MyAccountPage />);
    expect(screen.getByText(mockUser.firstName)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });

  it('renders input fields with correct values and properties', () => {
    render(<MyAccountPage />);
    const nameInput = screen.getByLabelText('Real Name');
    const emailInput = screen.getByLabelText('Email');

    expect(nameInput).toHaveValue(`${mockUser.firstName} ${mockUser.lastName}`);
    expect(emailInput).toHaveValue(mockUser.email);
    expect(nameInput).toBeDisabled();
    expect(emailInput).toBeDisabled();
  });
});
