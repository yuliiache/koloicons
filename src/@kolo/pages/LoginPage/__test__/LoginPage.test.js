import {Provider, useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from '@kolo/pages/LoginPage/LoginPage';
import {fireEvent, render, screen} from '@testing-library/react';
import store from 'app/store';
import {AppRoute} from 'constants/AppRoute';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('LoginPage', () => {
  const pageRender = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

  const mockReturnUserValue = {
    name: 'Sam',
    lastName: 'Dou',
    email: 'sam@gmail.com',
    _id: 'sam1234dou',
    isPro: false,
  };

  it('should create snapshot successfully', () => {
    const {asFragment} = pageRender();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to register page', () => {
    pageRender();

    const button = screen.getByRole('button', {name: /Sign Up/i});
    fireEvent.click(button);

    expect(window.location.pathname).toBe(AppRoute.REGISTER);
  });

  it('should navigate to icons page', () => {
    useSelector.mockReturnValue(mockReturnUserValue);
    pageRender();

    const button = screen.getByRole('button', {name: /Sign In/i});
    fireEvent.click(button);

    expect(window.location.pathname).toBe(AppRoute.ICONS);
  });
});
