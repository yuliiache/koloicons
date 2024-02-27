import {validateEmail, validatePassword} from '@kolo/services/validators/commonValidators';

import type {Value} from './LoginPage';

interface Error {
  email?: string;
  password?: string;
}

export const initalValues: Value = {
  email: '',
  password: '',
};

export const validateForm = (value: Value): Error => {
  const {email, password} = value;

  const errors: Error = {};

  errors.email = validateEmail(email);
  errors.password = validatePassword(password);

  return errors;
};
