import {
  validateCheckbox,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
} from '@kolo/services/validators/commonValidators';

import {RegisterFormValues} from './types/RegisterFormValues';

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  termsAgreement?: boolean;
}

export const validateRegisterForm = (values: RegisterFormValues): ValidationErrors => {
  const errors: ValidationErrors = {};
  const {firstName, lastName, email, password, termsAgreement} = values;

  errors.firstName = validateFirstName(firstName);
  errors.lastName = validateLastName(lastName);
  errors.email = validateEmail(email);
  errors.password = validatePassword(password);
  errors.termsAgreement = validateCheckbox(termsAgreement);

  return errors;
};
