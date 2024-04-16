import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import store from 'app/store';

import ResetPasswordPage from '../ResetPasswordPage';

describe('ResetPasswordPage', () => {
  const pageRender = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ResetPasswordPage />
        </BrowserRouter>
      </Provider>
    );

  it('should render page successfully', () => {
    const {asFragment} = pageRender();

    expect(asFragment()).toMatchSnapshot();
  });
});
