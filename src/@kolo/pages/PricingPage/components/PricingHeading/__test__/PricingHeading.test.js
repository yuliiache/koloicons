import {BrowserRouter} from 'react-router-dom';
import {KeyCode} from '@kolo/constants/constants';
import {SEARCH_BUTTON_WRAP_TEST_ID, SEARCH_INPUT_TEST_ID} from '@kolo/uiKit/Search/constants';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

import PricingHeading from '../PricingHeading';

describe('', () => {
  afterEach(cleanup);
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <PricingHeading />
      </BrowserRouter>
    );

  it('should render snapshot successfully', () => {
    const {asFragment} = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass a search query in the pathname and navigate to the icons page when user click the Search button or Enter key', () => {
    const mockInputValue = 'moon';
    const mockPathname = AppRoute.ICONS;
    const mockSearchQuery = `?searchQuery=${mockInputValue}`;

    renderComponent();

    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);
    const searchButtonWrap = screen.getByTestId(SEARCH_BUTTON_WRAP_TEST_ID);
    const searchButton = searchButtonWrap.querySelector('button');

    fireEvent.change(input, {target: {value: mockInputValue}});
    fireEvent.click(searchButton);
    fireEvent.keyDown(input, {key: KeyCode.ENTER, code: KeyCode.ENTER});

    expect(window.location.pathname + window.location.search).toEqual(mockPathname + mockSearchQuery);
  });
});
