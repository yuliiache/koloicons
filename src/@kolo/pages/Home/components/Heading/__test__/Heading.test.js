import {useSelector} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {KeyCode} from '@kolo/constants/constants';
import {SEARCH_BUTTON_WRAP_TEST_ID, SEARCH_INPUT_TEST_ID} from '@kolo/uiKit/Search/constants';
import {act, cleanup, fireEvent, render, screen} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

import Heading from '../Heading';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Heading component', () => {
  const renderPage = () => render(<Heading />, {wrapper: BrowserRouter});

  beforeEach(() => {
    useSelector.mockReturnValue(false);
  });
  afterEach(() => {
    cleanup();
    useSelector.mockReset();
  });

  it('should render and match snapshot successfully for unauthorized user', () => {
    const {asFragment} = renderPage();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass a search query in the pathname and navigate to the icons page when user click the Search button or Enter key', () => {
    const mockInputValue = 'moon';
    const mockPathname = AppRoute.ICONS;
    const mockSearchQuery = `?searchQuery=${mockInputValue}`;

    renderPage();

    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);
    const searchButtonWrap = screen.getByTestId(SEARCH_BUTTON_WRAP_TEST_ID);
    const searchButton = searchButtonWrap.querySelector('button');

    act(() => {
      fireEvent.change(input, {target: {value: mockInputValue}});
      fireEvent.click(searchButton);
      fireEvent.keyDown(input, {key: KeyCode.ENTER, code: KeyCode.ENTER});
    });

    expect(window.location.pathname + window.location.search).toEqual(mockPathname + mockSearchQuery);
  });

  it('should render with Try for Free button for unauthorized user', () => {
    renderPage();

    const button = screen.getByText('Try for Free');
    expect(button).toBeInTheDocument();
  });

  it('should render and match snapshot without Try for Free button for authorized user', () => {
    useSelector.mockReturnValue(true);
    const {asFragment} = renderPage();

    const button = screen.queryByText('Try for Free');

    expect(button).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to the register page when user click the Try for Free button', () => {
    renderPage();

    const button = screen.getByText('Try for Free');

    fireEvent.click(button);

    expect(window.location.pathname).toEqual(AppRoute.REGISTER);
  });

  it('should navigate to the icons page when user click the Browse All Icons button', () => {
    renderPage();
    const button = screen.getByText('Browse All Icons');

    fireEvent.click(button);

    expect(window.location.pathname).toEqual(AppRoute.ICONS);
  });
});
