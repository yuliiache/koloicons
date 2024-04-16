import {validateEqualPasswords} from '@kolo/services/validators/commonValidators';
import {validatePassword} from '@kolo/services/validators/commonValidators';

import type {ResetPasswordValue} from './types/ResetPasswordValue';

interface Error {
  password?: string;
  confirmPassword?: string;
}

export const initialValues: ResetPasswordValue = {
  password: '',
  confirmPassword: '',
};

export const validateForm = (value: ResetPasswordValue): Error => {
  const errors: Error = {};

  errors.password = validatePassword(value.password);
  errors.confirmPassword = validateEqualPasswords(...Object.values(value));

  return errors;
};
