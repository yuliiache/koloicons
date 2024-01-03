import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

export const Input = ({id, label, placeholder, isDisabled = false, errorMessage, hint, value, onChange}) => {
  const inputClasses = classNames(styles.inputGroupInput, {
    [styles.invalid]: errorMessage,
  });

  const handleChange = (e) => {
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
        type="text"
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && <span className={styles.inputGroupError}>{errorMessage}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
