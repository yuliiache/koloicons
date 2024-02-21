import {
  validateCheckbox,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
} from '../commonValidators';
import {STRING_LENGTH} from '../constants';

const {EMAIL_MAX_LENGTH, EMAIL_MIN_LENGTH, NAME_MAX_LENGTH, NAME_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH} =
  STRING_LENGTH;

describe('validateFirstName function', () => {
  it('should return error message when first name is not entered', () => {
    const invalidFirstName = '';
    const errorMessage = 'Please, fill in first name';

    expect(validateFirstName(invalidFirstName)).toEqual(errorMessage);
  });

  it('should return error message when first name is too long', () => {
    const invalidFirstName = 'a'.repeat(NAME_MAX_LENGTH + 1);
    const errorMessage = 'The length of the first name is too long';

    expect(validateFirstName(invalidFirstName)).toEqual(errorMessage);
  });

  it('should return undefined when valid first name is entered', () => {
    const validFirstName = 'a'.repeat(NAME_MIN_LENGTH);

    expect(validateFirstName(validFirstName)).toEqual(undefined);
  });
});

describe('validateLastName function', () => {
  it('should return error message when last name is not entered', () => {
    const invalidLastName = '';
    const errorMessage = 'Please, fill in last name';

    expect(validateLastName(invalidLastName)).toEqual(errorMessage);
  });

  it('should return error message when last name is too long', () => {
    const invalidLastName = 'a'.repeat(NAME_MAX_LENGTH + 1);
    const errorMessage = 'The length of the last name is too long';

    expect(validateLastName(invalidLastName)).toEqual(errorMessage);
  });

  it('should return undefined when valid last name is entered', () => {
    const validLastName = 'a'.repeat(NAME_MIN_LENGTH);

    expect(validateFirstName(validLastName)).toEqual(undefined);
  });
});

describe('validateEmail function', () => {
  const errorMessageInvalid = 'Email is invalid';

  it('should return error message when email is not entered', () => {
    const invalidEmail = '';
    const errorMessage = 'Please, fill in email';

    expect(validateEmail(invalidEmail)).toEqual(errorMessage);
  });

  it('should return error message when email is too short', () => {
    const invalidEmail = 'a'.repeat(EMAIL_MIN_LENGTH - 1);

    expect(validateEmail(invalidEmail)).toEqual(errorMessageInvalid);
  });

  it('should return error message when personal_info is invalid', () => {
    const invalidEmail = 'invalid..email@example.com';

    expect(validateEmail(invalidEmail)).toEqual(errorMessageInvalid);
  });

  it('should return error message when domain is invalid', () => {
    const invalidEmail = 'email@invalid!domain.com';

    expect(validateEmail(invalidEmail)).toEqual(errorMessageInvalid);
  });

  it('should return error message when top-level domain is too short', () => {
    const invalidEmail = 'email@invalid.c';

    expect(validateEmail(invalidEmail)).toEqual(errorMessageInvalid);
  });

  it('should return error message when email is too long', () => {
    const invalidEmail = 'a'.repeat(EMAIL_MAX_LENGTH + 1);
    const errorMessage = 'The length of the email is too long';

    expect(validateEmail(invalidEmail)).toEqual(errorMessage);
  });

  it('should return undefined when valid email is entered', () => {
    const validEmail = 'valiD.em/ail@exam-ple.ua';

    expect(validateEmail(validEmail)).toEqual(undefined);
  });
});

describe('validatePassword function', () => {
  it('should return error message when password is not entered', () => {
    const invalidPassword = '';
    const errorMessage = 'Please, fill in password';

    expect(validatePassword(invalidPassword)).toEqual(errorMessage);
  });

  it('should return error message when password is too short', () => {
    const invalidPassword = 'a'.repeat(PASSWORD_MIN_LENGTH - 1);
    const errorMessage = 'The length of the password is too short';

    expect(validatePassword(invalidPassword)).toEqual(errorMessage);
  });

  it('should return error message when password is too long', () => {
    const invalidPassword = 'a'.repeat(PASSWORD_MAX_LENGTH + 1);
    const errorMessage = 'The length of the password is too long';

    expect(validatePassword(invalidPassword)).toEqual(errorMessage);
  });

  it('should return undefined when valid password is entered', () => {
    const validPassword = 'a'.repeat(PASSWORD_MIN_LENGTH);

    expect(validatePassword(validPassword)).toEqual(undefined);
  });
});

describe('validateCheckbox function', () => {
  it('should return true when checkbox is not checked', () => {
    const isChecked = false;
    expect(validateCheckbox(isChecked)).toBe(true);
  });

  it('should return undefined when checkbox is checked', () => {
    const isChecked = true;
    expect(validateCheckbox(isChecked)).toBe(undefined);
  });
});
