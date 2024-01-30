import {MemoryRouter} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

import Logo from '../Logo';

const testConditions = Object.freeze({
  TRUE: true,
  FALSE: false,
});

const testValues = Object.values(testConditions);

describe('Logo', () => {
  testValues.forEach((isLoading) => {
    it('should render snapshot successfully', () => {
      const {asFragment} = render(<Logo isLoading={isLoading} />, {wrapper: MemoryRouter});
      expect(asFragment()).toMatchSnapshot();
    });

    it('should navigate to home when you click the logo', () => {
      render(<Logo isLoading={isLoading} />, {wrapper: BrowserRouter});

      const link = screen.getByRole('link');

      fireEvent.click(link);

      expect(window.location.pathname).toEqual(AppRoute.HOME);
    });
  });
});
