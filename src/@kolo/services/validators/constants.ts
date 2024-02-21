export const STRING_LENGTH = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 255,
  EMAIL_MIN_LENGTH: 6,
  EMAIL_MAX_LENGTH: 255,
  PASSWORD_MIN_LENGTH: 3,
  PASSWORD_MAX_LENGTH: 1024,
} as const;

export const EMAIL_REGEX =
  /^[A-Za-z0-9-!#$%&'*+/=?^_`{|}~]+(?:\.[A-Za-z0-9-!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
