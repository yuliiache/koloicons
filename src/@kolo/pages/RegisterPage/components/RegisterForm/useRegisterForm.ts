import {FormApi} from 'final-form';

import {RegisterFormValues} from './types/RegisterFormValues';

interface RegisterFormHookReturn {
  initialValues: RegisterFormValues;
  onFormSubmit: (values: RegisterFormValues, form: FormApi<RegisterFormValues, RegisterFormValues>) => void;
}

const initialValues: RegisterFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  subscribeAgreement: true,
  termsAgreement: false,
};

export const useRegisterForm = (onSubmit: (values: RegisterFormValues) => void): RegisterFormHookReturn => {
  const onFormSubmit = (values: RegisterFormValues, form: FormApi<RegisterFormValues, RegisterFormValues>): void => {
    onSubmit(values);
    form.reset();

    /* reset field's flags (e.g. modified, touched, etc.) to their initial state
    to display errors correctly */
    form.batch(() => {
      Object.keys(initialValues).forEach((fieldName: string) => {
        form.resetFieldState(fieldName as keyof RegisterFormValues);
      });
    });
  };

  return {initialValues, onFormSubmit};
};
