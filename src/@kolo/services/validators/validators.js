export const required = (error) => (value) => !value ? error : undefined;
// export const minLen = (len, error) => ...
// export const maxLen = (len, error) => ...
// export const testRegExp = (regExp, error) => ...
// export const samePasswords = (error) => (values) => ...;
// export const requiredValues = (error) => (values) => ...;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
