import classNames from 'classnames';
import React from 'react';

import styles from './Input.module.scss';
import {InputType} from './InputType';

interface Props {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  errorMessage?: string;
  hint?: string;
  hasAutoFocus?: boolean;
  id: string;
  type: InputType;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({
  id,
  label,
  placeholder,
  errorMessage,
  hint,
  type,
  value,
  onChange,
  isDisabled = false,
  hasAutoFocus = false,
}) => {
  const inputClasses = classNames(styles.inputGroupInput, {
    [styles.invalid]: errorMessage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      {label && (
        <label
          className={styles.inputGroupLabel}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {hint && <span className={styles.inputGroupHint}>{hint}</span>}
      <input
        className={inputClasses}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        autoFocus={hasAutoFocus}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && <span className={styles.inputGroupError}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
