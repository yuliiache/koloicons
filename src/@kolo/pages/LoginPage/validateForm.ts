import {validateEmail, validatePassword} from '@kolo/services/validators/commonValidators';

import {LoginFormValue} from './types/LoginFormValue';

interface Error {
  email?: string;
  password?: string;
}

export const initialValues: LoginFormValue = {
  email: '',
  password: '',
};

export const validateForm = (value: LoginFormValue): Error => {
  const {email, password} = value;

  const errors: Error = {};

  errors.email = validateEmail(email);
  errors.password = validatePassword(password);

  return errors;
};
