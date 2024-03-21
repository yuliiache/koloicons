import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import Categories from '../Categories';
import * as useCategoriesHook from '../hooks/useCategories';
import * as useCategoryHook from '../hooks/useCategory';

jest.mock('../CategoryButton/CategoryButton', () => {
  const MockCategoryButton = ({name, onClick, isActive}) => (
    <button
      data-testid="category-button"
      data-active={isActive.toString()}
      onClick={onClick}
    >
      {name}
    </button>
  );

  MockCategoryButton.displayName = 'MockCategoryButton';

  return MockCategoryButton;
});

describe('Categories Component', () => {
  beforeEach(() => {
    jest.spyOn(useCategoriesHook, 'default').mockReturnValue({
      categoriesList: [],
      isLoading: true,
    });
    jest.spyOn(useCategoryHook, 'default').mockReturnValue({
      activeCategoryId: null,
      handleCategoryClick: jest.fn(),
    });
  });

  it('renders null when isLoading is true', () => {
    render(<Categories />);
    const categoryList = screen.queryByTestId('category-list');
    expect(categoryList).not.toBeInTheDocument();
  });

  it('renders categories list correctly and matches snapshot', () => {
    useCategoriesHook.default.mockReturnValue({
      categoriesList: [
        {id: '1', name: 'Category 1'},
        {id: '2', name: 'Category 2'},
      ],
      isLoading: false,
    });
    render(<Categories />);
    const buttons = screen.getAllByTestId('category-button');
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent('Category 1');
    expect(buttons[1]).toHaveTextContent('Category 2');
  });

  it('correctly handles category click', () => {
    const handleCategoryClickMock = jest.fn();
    useCategoriesHook.default.mockReturnValue({
      categoriesList: [{id: '1', name: 'Category 1'}],
      isLoading: false,
    });
    useCategoryHook.default.mockReturnValue({
      activeCategoryId: '1',
      handleCategoryClick: handleCategoryClickMock,
    });
    render(<Categories />);
    const button = screen.getByText('Category 1');
    fireEvent.click(button);
    expect(handleCategoryClickMock).toHaveBeenCalledWith('1');
  });

  it('matches snapshot with categories list', () => {
    useCategoriesHook.default.mockReturnValue({
      categoriesList: [
        {id: '1', name: 'Category 1'},
        {id: '2', name: 'Category 2'},
      ],
      isLoading: false,
    });
    const {asFragment} = render(<Categories />);
    expect(asFragment()).toMatchSnapshot();
  });
});
