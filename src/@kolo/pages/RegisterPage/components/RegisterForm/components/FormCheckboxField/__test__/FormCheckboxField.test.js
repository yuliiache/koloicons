import {Form} from 'react-final-form';
import {CheckboxDataTestId} from '@kolo/pages/RegisterPage/components/RegisterForm/constants';
import {render, screen} from '@testing-library/react';

import FormCheckboxField from '../FormCheckboxField';

describe('FormCheckboxField component', () => {
  const onSubmitMock = jest.fn();
  const formProps = {
    initialValues: {
      subscribeAgreement: true,
      termsAgreement: false,
    },
    onSubmit: onSubmitMock,
  };

  it('should render snapshot successfully for checked subscription agreement checkbox', () => {
    const dataTestId = CheckboxDataTestId.SUBSCRIBE_AGREEMENT_CHECKBOX;
    const fieldProps = {
      dataTestId: dataTestId,
      fieldName: 'subscribeAgreement',
    };
    const {asFragment} = render(<Form {...formProps}>{() => <FormCheckboxField {...fieldProps} />}</Form>);

    const checkboxWrapper = screen.getByTestId(dataTestId);
    const subscribeAgreementCheckbox = checkboxWrapper.querySelector('input[type="checkbox"]');

    expect(subscribeAgreementCheckbox).toBeChecked();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render snapshot successfully for unchecked terms agreement checkbox', () => {
    const dataTestId = CheckboxDataTestId.TERMS_AGREEMENT_CHECKBOX;
    const fieldProps = {
      dataTestId: dataTestId,
      fieldName: 'termsAgreement',
    };
    const {asFragment} = render(<Form {...formProps}>{() => <FormCheckboxField {...fieldProps} />}</Form>);

    const checkboxWrapper = screen.getByTestId(dataTestId);
    const termsAgreementCheckbox = checkboxWrapper.querySelector('input[type="checkbox"]');

    expect(termsAgreementCheckbox).not.toBeChecked();

    expect(asFragment()).toMatchSnapshot();
  });
});
