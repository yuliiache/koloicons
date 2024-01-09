import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.scss';

export const Checkbox = ({id, isChecked, onChange, isDisabled = false, hasError}) => {
  const errorMessage = 'Required';

  const checkboxClasses = classNames(styles.checkbox__indicator, {
    [styles['checkbox__indicator--error']]: hasError,
  });

  return (
      <label className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          id={id}
          type="checkbox"
          disabled={isDisabled}
          checked={isChecked}
          onChange={onChange}
        />
        <span className={checkboxClasses}></span>
        {hasError && <span className={styles.checkbox__error}>{errorMessage}</span>}
      </label>
  );
};


Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
};

