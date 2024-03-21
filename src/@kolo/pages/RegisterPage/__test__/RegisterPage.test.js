import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import store from 'app/store';
import {AppRoute} from 'constants/AppRoute';

import RegisterPage from '../RegisterPage';

describe('RegisterPage component', () => {
  afterEach(cleanup);
  const onSubmitMock = jest.fn();
  const renderPage = () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterPage onSubmit={onSubmitMock} />
        </Provider>
      </BrowserRouter>
    );

  it('should render snapshot successfully', () => {
    const {asFragment} = renderPage();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to login page when user click the Sign In button', () => {
    renderPage();
    const signInButton = screen.getByText('Sign In');

    fireEvent.click(signInButton);

    expect(signInButton).toBeInTheDocument();
    expect(window.location.pathname).toEqual(AppRoute.LOGIN);
  });
});
