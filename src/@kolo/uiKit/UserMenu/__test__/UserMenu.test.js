import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import store from 'app/store';

import '@testing-library/jest-dom';

import UserMenu from '../UserMenu';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('UserMenu Component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(false);
  });
  afterEach(() => {
    cleanup();
    useSelector.mockReset();
  });

  const renderUserMenu = (props) =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserMenu {...props} />
        </BrowserRouter>
      </Provider>
    );

  describe('Authenticated Types', () => {
    const mockProps = {
      name: 'Name',
      isPro: false,
    };

    it('renders correctly for Authenticated user', () => {
      useSelector.mockReturnValue(true);
      const {asFragment} = renderUserMenu(mockProps);

      expect(screen.getByText(mockProps.name)).toBeInTheDocument();

      const firstLetterElement = screen.getByText(mockProps.name.charAt(0));

      expect(firstLetterElement).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders the Upgrade button when user in not Pro', () => {
      useSelector.mockReturnValue(true);
      const {asFragment} = renderUserMenu(mockProps);

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('checks the dropdown menu visibility upon hover', () => {
      useSelector.mockReturnValue(true);
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
