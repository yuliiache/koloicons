import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import UserMenu from '../UserMenu';

describe('UserMenu Component', () => {
  const renderUserMenu = (props) => {
    return render(
      <BrowserRouter>
        <UserMenu {...props} />
      </BrowserRouter>
    );
  };

  describe('Authenticated Types', () => {
    const mockProps = {
      email: 'name@test.com',
      name: 'Name',
      isPro: false,
    };

    it('renders correctly for Authenticated user', () => {
      const {asFragment} = renderUserMenu(mockProps);
      expect(screen.getByText(mockProps.name)).toBeInTheDocument();
      const firstLetterElement = screen.getByText(mockProps.name.charAt(0));
      expect(firstLetterElement).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders the Upgrade button when user in not Pro', () => {
      const {asFragment} = renderUserMenu(mockProps);
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('checks the dropdown menu visibility upon hover', () => {
      renderUserMenu(mockProps);

      const userInfoSection = screen.getByTestId('hover-area');

      fireEvent.mouseEnter(userInfoSection);

      const dropdownMenu = screen.getByRole('menu', {name: 'user options'});
      expect(dropdownMenu).toBeVisible();

      fireEvent.mouseLeave(userInfoSection);

      expect(dropdownMenu).not.toBeVisible();
    });
  });

  describe('non Authenticated Types', () => {
    const mockProps = {
      email: '',
      name: '',
      isPro: false,
    };

    it('renders correctly for non Authenticated user', () => {
      const {asFragment} = renderUserMenu(mockProps);
      expect(screen.getByTestId('icon-user')).toBeInTheDocument();
      expect(screen.getByRole('link', {name: /sign in/i})).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
