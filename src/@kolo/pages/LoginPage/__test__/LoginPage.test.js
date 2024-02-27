import {BrowserRouter} from 'react-router-dom';
import LoginPage from '@kolo/pages/LoginPage/LoginPage';
import {fireEvent, render, screen} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

describe('LoginPage', () => {
  it('should create snapshot successfully', () => {
    const {asFragment} = render(<LoginPage />, {wrapper: BrowserRouter});

    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to register page', () => {
    render(<LoginPage />, {wrapper: BrowserRouter});

    const button = screen.getByRole('button', {name: /Sign Up/i});
    fireEvent.click(button);

    expect(window.location.pathname).toBe(AppRoute.REGISTER);
  });
});
