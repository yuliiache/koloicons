import {ValidatorProperty, ValidatorResult} from './types';

const trimString = (value: string | undefined): string => (value ? value.trim() : '');

export const composeValidators =
  (...validators: ValidatorProperty[]) =>
  (value: string): ValidatorResult => {
    const trimmedValue = trimString(value);

    return validators.reduce(
      (error: ValidatorResult, validator: ValidatorProperty) => error || validator(trimmedValue),
      undefined
    );
  };
