import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import LoginForm from '../LoginForm';

const testCases = Object.freeze({
  email: 'email',
  password: 'password',
});

const inputs = Object.values(testCases);
const onSubmitMock = jest.fn();

describe('LoginForm', () => {
  inputs.forEach((input) => {
    it(`should type in ${input} input`, () => {
      render(<LoginForm onSubmit={onSubmitMock} />, {wrapper: BrowserRouter});

      const inputRegEx = new RegExp(input, 'i');
      const screenInput = screen.getByRole('textbox', {labelText: inputRegEx});

      fireEvent.change(screenInput, {target: {value: input}});

      expect(screenInput).toHaveValue(input);
    });
  });
});
