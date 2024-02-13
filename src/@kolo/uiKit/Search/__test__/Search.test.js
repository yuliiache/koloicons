import {KeyCode} from '@kolo/constants/constants';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

import {CANCEL_BUTTON_WRAP_TEST_ID, SEARCH_BUTTON_WRAP_TEST_ID, SEARCH_INPUT_TEST_ID} from '../constants';
import Search from '../Search';

describe('Search component', () => {
  afterEach(cleanup);

  const onSearchMock = jest.fn();
  const mockInputValue = 'a';
  const props = {
    placeholder: 'Search icon',
    onSearch: onSearchMock,
  };
  const renderSearch = (props) => render(<Search {...props} />);

  const testFocusCases = [
    {name: 'without autofocus', props: {...props, isFocused: false}, expectFocus: false},
    {name: 'with autofocus', props: {...props, isFocused: true}, expectFocus: true},
  ];

  it('should render snapshot successfully', () => {
    const {asFragment} = renderSearch(props);

    expect(asFragment()).toMatchSnapshot();
  });

  testFocusCases.forEach(({name, props, expectFocus}) => {
    it(`should render input ${name}`, () => {
      renderSearch(props);

      const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

      expect(document.activeElement === input).toBe(expectFocus);
    });
  });

  it('should update input value when typing', () => {
    renderSearch(props);

    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.keyDown(input, {key: 'a'});
    fireEvent.change(input, {target: {value: mockInputValue}});

    expect(input).toHaveValue(mockInputValue);
  });

  it('should not render a cancel button', () => {
    renderSearch(props);

    const cancelButton = screen.queryByTestId(CANCEL_BUTTON_WRAP_TEST_ID);

    expect(cancelButton).not.toBeInTheDocument();
  });

  it('should render snapshot with the cancel button successfully', () => {
    const {asFragment} = renderSearch(props);

    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.change(input, {target: {value: mockInputValue}});

    const cancelButton = screen.getByTestId(CANCEL_BUTTON_WRAP_TEST_ID);

    expect(cancelButton).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call clearing function after the cancel button is clicked', () => {
    const clearInput = jest.fn();
    renderSearch(props);

    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.change(input, {target: {value: mockInputValue}});

    const cancelButtonWrap = screen.getByTestId(CANCEL_BUTTON_WRAP_TEST_ID);
    const cancelButton = cancelButtonWrap.querySelector('button');

    fireEvent.click(cancelButton);

    expect(input).toHaveValue('');
    expect(clearInput).toHaveBeenCalled;
  });

  it('should call onSearch function after the search button is clicked', () => {
    renderSearch(props);
    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);
    const searchButtonWrap = screen.getByTestId(SEARCH_BUTTON_WRAP_TEST_ID);
    const searchButton = searchButtonWrap.querySelector('button');

    fireEvent.change(input, {target: {value: mockInputValue}});
    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith(mockInputValue);
  });

  it('should not call onSearch function when input value is empty and the search button is clicked', () => {
    renderSearch(props);
    const searchButtonWrap = screen.getByTestId(SEARCH_BUTTON_WRAP_TEST_ID);
    const searchButton = searchButtonWrap.querySelector('button');

    fireEvent.click(searchButton);

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it('should call onSearch function after the "Enter" key is pressed', () => {
    renderSearch(props);
    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.change(input, {target: {value: mockInputValue}});
    fireEvent.keyDown(input, {key: KeyCode.ENTER, code: KeyCode.ENTER});

    expect(onSearchMock).toHaveBeenCalledWith(mockInputValue);
  });

  it('should not call onSearch function when input value is empty and the "Enter" key is pressed', () => {
    renderSearch(props);
    const input = screen.getByTestId(SEARCH_INPUT_TEST_ID);

    fireEvent.keyDown(input, {key: KeyCode.ENTER, code: KeyCode.ENTER});

    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
