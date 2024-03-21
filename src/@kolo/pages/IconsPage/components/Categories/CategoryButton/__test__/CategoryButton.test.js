import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import CategoryButton from '../CategoryButton';

describe('CategoryButton', () => {
  it('renders correctly with given name and matches snapshot', () => {
    const name = 'Test Category';
    const {asFragment} = render(
      <CategoryButton
        name={name}
        onClick={() => {}}
        isActive={false}
      />
    );
    expect(screen.getByRole('button')).toHaveTextContent(name);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
      <CategoryButton
        name="Test"
        onClick={handleClick}
        isActive={false}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies active class when isActive is true', () => {
    const {container} = render(
      <CategoryButton
        name="Test"
        onClick={() => {}}
        isActive={true}
      />
    );
    expect(container.firstChild).toHaveClass('categoryButton-active');
  });

  it('does not apply active class when isActive is false', () => {
    const {container} = render(
      <CategoryButton
        name="Test"
        onClick={() => {}}
        isActive={false}
      />
    );
    expect(container.firstChild).not.toHaveClass('categoryButton-active');
  });
});
