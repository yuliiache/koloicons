import React from 'react';
import PropTypes from 'prop-types';

import {TOGGLE_TEST_ID} from './constants';

import styles from './Toggle.module.scss';

export const Toggle = ({isChecked = false, isDisabled = false, name, compId = 'toggleId', onChange}) => {
  return (
    <label
      className={styles.toggle}
      htmlFor={compId}
    >
      <input
        className={styles.toggleInput}
        type="checkbox"
        name={name}
        id={compId}
        data-testid={TOGGLE_TEST_ID}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <span className={styles.toggleLabel} />
    </label>
  );
};

Toggle.propTypes = {
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  compId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
