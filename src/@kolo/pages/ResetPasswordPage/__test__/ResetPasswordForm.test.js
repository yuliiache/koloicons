import {BrowserRouter} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import ResetPasswordForm from '../components/ResetPasswordForm';

const testCases = Object.freeze({
  password: 'Password',
  confirmPassword: 'Confirm Password',
});

const inputs = Object.values(testCases);
const onSubmitMock = jest.fn();

describe('ResetPasswordForm', () => {
  inputs.forEach((input) => {
    it(`should type in ${input} input`, () => {
      render(<ResetPasswordForm onSubmit={onSubmitMock} />, {wrapper: BrowserRouter});

      const screenInput = screen.getByPlaceholderText(input);

      fireEvent.change(screenInput, {target: {value: input}});

      expect(screenInput).toHaveValue(input);
    });
  });
});
