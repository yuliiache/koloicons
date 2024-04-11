import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {IconSize, IconStyle} from '@kolo/constants/constants';
import {cleanup, fireEvent, render} from '@testing-library/react';
import store from 'app/store';
import {AppRoute} from 'constants/AppRoute';

import {PACK_ITEM_TEST_ID} from '../constatnts';
import PackItem from '../PackItem';

const mockedProps = {
  title: 'Title',
  number: 20,
  icons: [
    {
      id: 1,
      name: 'test',
      style: IconStyle.LINE | IconStyle.SOLID,
      size: IconSize.DETAILED | IconSize.SIMPLE,
    },
  ],
  isFree: true,
  isAuthenticated: true,
  onClick: jest.fn(),
};

describe('PackItem component', () => {
  afterEach(cleanup);

  it('should render snapshot successfully', () => {
    const {asFragment} = render(
      <BrowserRouter>
        <Provider store={store}>
          <PackItem {...mockedProps} />
        </Provider>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('"Download for free" button should redirect to Login Page if user not logged in', () => {
    const {getByText} = render(
      <BrowserRouter history={history}>
        <Provider store={store}>
          <PackItem
            {...mockedProps}
            isAuthenticated={false}
          />
        </Provider>
      </BrowserRouter>
    );

    const button = getByText('Download for free');

    fireEvent.click(button);

    expect(window.location.pathname).toBe(AppRoute.LOGIN);
  });

  it('"Download for free" button should not execute onClick fn', () => {
    const {getByText} = render(
      <BrowserRouter>
        <Provider store={store}>
          <PackItem {...mockedProps} />
        </Provider>
      </BrowserRouter>
    );

    const button = getByText('Download for free');

    fireEvent.click(button);

    expect(mockedProps.onClick).not.toHaveBeenCalled();
  });

  it('should execute onClick fn when clicked on PackItem card successfully', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <Provider store={store}>
          <PackItem {...mockedProps} />
        </Provider>
      </BrowserRouter>
    );

    const card = getByTestId(PACK_ITEM_TEST_ID);

    fireEvent.click(card);

    expect(mockedProps.onClick).toHaveBeenCalled();
  });
});
