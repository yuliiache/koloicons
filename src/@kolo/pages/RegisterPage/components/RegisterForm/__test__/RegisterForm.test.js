import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {AppRoute} from 'constants/AppRoute';

import {CheckboxDataTestId} from '../constants';
import RegisterForm from '../RegisterForm';

import {REGISTER_FIELDS} from './testsConfig';

describe('RegisterForm component', () => {
  const onSubmitMock = jest.fn();
  const renderForm = () => render(<RegisterForm onSubmit={onSubmitMock} />, {wrapper: MemoryRouter});

  it('should render snapshot successfully', () => {
    const {asFragment} = renderForm();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to "Terms of service" page when user click the "Terms of Use" link', () => {
    render(<RegisterForm onSubmit={onSubmitMock} />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', {name: 'Terms of Use'});

    fireEvent.click(link);

    expect(window.location.pathname).toEqual(AppRoute.TERMS_OF_SERVICE);
  });

  it('should navigate to "Privacy Policy" page when user click the "Privacy Policy" link', () => {
    render(<RegisterForm onSubmit={onSubmitMock} />, {wrapper: BrowserRouter});
    const link = screen.getByRole('link', {name: 'Privacy Policy'});

    fireEvent.click(link);

    expect(window.location.pathname).toEqual(AppRoute.PRIVACY_POLICY);
  });

  it('form with the correct button', () => {
    renderForm();
    const submitButton = screen.getByRole('button');

    expect(submitButton).toHaveTextContent('Sign Up');
  });
});

describe('RegisterForm component', () => {
  afterEach(cleanup);
  const mockValidInputValues = {
    firstName: 'Valid First Name',
    lastName: 'Valid Last Name',
    email: 'valid.Email@example.com',
    password: 'validPassword1',
  };
  const onSubmitMock = jest.fn();
  const renderForm = () => render(<RegisterForm onSubmit={onSubmitMock} />, {wrapper: MemoryRouter});
  const submitForm = () => {
    fireEvent.submit(screen.getByRole('button', {name: 'Sign Up'}));
  };

  it('should call onSubmit function', () => {
    renderForm();
    const mockValidFormValues = {
      ...mockValidInputValues,
      subscribeAgreement: true,
      termsAgreement: true,
    };

    const firstNameInput = screen.getByLabelText('First name');
    const lastNameInput = screen.getByLabelText('Last name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const checkboxWrapper = screen.getByTestId(CheckboxDataTestId.TERMS_AGREEMENT_CHECKBOX);
    const termsAgreementCheckbox = checkboxWrapper.querySelector('input[type="checkbox"]');

    fireEvent.change(firstNameInput, {target: {value: mockValidFormValues.firstName}});
    fireEvent.change(lastNameInput, {target: {value: mockValidFormValues.lastName}});
    fireEvent.change(emailInput, {target: {value: mockValidFormValues.email}});
    fireEvent.change(passwordInput, {target: {value: mockValidFormValues.password}});
    fireEvent.click(termsAgreementCheckbox);

    fireEvent.click(screen.getByText('Sign Up'));

    expect(onSubmitMock).toHaveBeenCalledWith(mockValidFormValues);
  });

  describe('should show validation error on submit', () => {
    afterEach(cleanup);

    REGISTER_FIELDS.forEach(({label}) => {
      it(`for the ${label} input`, () => {
        renderForm();
        submitForm();

        expect(screen.getByText(`Please, fill in ${label.toLowerCase()}`)).toBeInTheDocument();
      });
    });

    it('for terms of use agreement checkbox', () => {
      renderForm();
      submitForm();

      expect(screen.getByText('Required')).toBeInTheDocument();
    });

    it('and render snapshot successfully', () => {
      const {asFragment} = renderForm();
      submitForm();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('should not show validation error on submit', () => {
    beforeEach(() => {
      renderForm();
    });
    afterEach(cleanup);

    REGISTER_FIELDS.forEach(({label}) => {
      Object.keys(mockValidInputValues).forEach((fieldName) => {
        it(`for the ${label} input`, () => {
          const errorMessage = `Please, fill in ${label.toLowerCase()}`;
          const input = screen.getByLabelText(`${label}`);
          const inputValue = mockValidInputValues[fieldName];

          fireEvent.change(input, {target: {value: inputValue}});

          submitForm();

          expect(input).toHaveValue(inputValue);
          expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
        });
      });
    });

    it('for the required checkbox', () => {
      const errorMessage = 'Required';

      const checkboxWrapper = screen.getByTestId(CheckboxDataTestId.TERMS_AGREEMENT_CHECKBOX);
      const termsAgreementCheckbox = checkboxWrapper.querySelector('input[type="checkbox"]');

      fireEvent.click(termsAgreementCheckbox);

      submitForm();

      expect(termsAgreementCheckbox).toBeChecked();
      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    });
  });
});
