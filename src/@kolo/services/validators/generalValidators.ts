import {ValidatorResult} from './types';

export const validateRequired =
  (error: string) =>
  (value: string): ValidatorResult =>
    !value ? error : undefined;

export const validateMinLength =
  (len: number, error: string) =>
  (value: string): ValidatorResult =>
    value.length < len ? error : undefined;

export const validateMaxLength =
  (len: number, error: string) =>
  (value: string): ValidatorResult =>
    value.length > len ? error : undefined;

export const testRegex =
  (regex: RegExp, error: string) =>
  (value: string): ValidatorResult =>
    !regex.test(value) ? error : undefined;

export const equalPasswords = (error: string, ...value: string[]): string | undefined => {
  const [password, confirmPassword] = value;
  return password !== confirmPassword ? error : undefined;
};
