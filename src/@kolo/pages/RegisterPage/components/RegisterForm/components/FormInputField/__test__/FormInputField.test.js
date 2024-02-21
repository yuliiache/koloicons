import {Form} from 'react-final-form';
import {REGISTER_FIELDS} from '@kolo/pages/RegisterPage/components/RegisterForm/__test__/testsConfig';
import {cleanup, render, screen} from '@testing-library/react';

import FormInputField from '../FormInputField';

describe('FormInputField component', () => {
  afterEach(cleanup);
  const onSubmitMock = jest.fn();

  REGISTER_FIELDS.forEach(({fieldName, label, type}) => {
    const props = {
      fieldName,
      label,
      type,
    };

    it(`should render snapshot successfully with ${label} label`, () => {
      const {asFragment} = render(<Form onSubmit={onSubmitMock}>{() => <FormInputField {...props} />}</Form>);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should render first name field is focused', () => {
    const firstInputProps = REGISTER_FIELDS[0];
    const props = {
      ...firstInputProps,
    };
    render(<Form onSubmit={onSubmitMock}>{() => <FormInputField {...props} />}</Form>);

    const firstInput = screen.getByLabelText('First name');

    expect(firstInput).toHaveFocus();
  });
});
