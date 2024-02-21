import {composeValidators} from './compose';
import {EMAIL_REGEX, STRING_LENGTH} from './constants';
import {testRegex, validateMaxLength, validateMinLength, validateRequired} from './generalValidators';

const {EMAIL_MAX_LENGTH, EMAIL_MIN_LENGTH, NAME_MAX_LENGTH, NAME_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH} =
  STRING_LENGTH;

const toBoolean = (value: boolean | undefined): boolean => (value ? true : false);

export const validateFirstName = (value: string) => {
  return composeValidators(
    validateRequired('Please, fill in first name'),
    validateMinLength(NAME_MIN_LENGTH, 'The length of the first name is too short'),
    validateMaxLength(NAME_MAX_LENGTH, 'The length of the first name is too long')
  )(value);
};

export const validateLastName = (value: string) => {
  return composeValidators(
    validateRequired('Please, fill in last name'),
    validateMinLength(NAME_MIN_LENGTH, 'The length of the last name is too short'),
    validateMaxLength(NAME_MAX_LENGTH, 'The length of the last name is too long')
  )(value);
};

export const validateEmail = (value: string) => {
  return composeValidators(
    validateRequired('Please, fill in email'),
    validateMinLength(EMAIL_MIN_LENGTH, 'Email is invalid'),
    validateMaxLength(EMAIL_MAX_LENGTH, 'The length of the email is too long'),
    testRegex(EMAIL_REGEX, 'Email is invalid')
  )(value);
};

export const validatePassword = (value: string) => {
  return composeValidators(
    validateRequired('Please, fill in password'),
    validateMinLength(PASSWORD_MIN_LENGTH, 'The length of the password is too short'),
    validateMaxLength(PASSWORD_MAX_LENGTH, 'The length of the password is too long')
  )(value);
};

export const validateCheckbox = (checked: boolean | undefined): boolean | undefined =>
  !toBoolean(checked) ? true : undefined;
