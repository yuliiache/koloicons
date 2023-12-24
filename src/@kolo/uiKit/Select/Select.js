import React from 'react';
import PropTypes from 'prop-types';

import {SELECT_TEST_ID} from './constants';

import styles from './Select.module.scss';

export const Select = ({label, name, options = [], value = '', compId = 'selectId', onChange}) => {
  return (
    <div className={styles.select}>
      {!!label && (
        <label
          className={styles.selectLabel}
          data-testid={SELECT_TEST_ID}
          htmlFor={compId}
        >
          {label}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          className={styles.selectOptions}
          onChange={onChange}
          name={name}
          id={compId}
          value={value}
        >
          {options.length &&
            options.map((option) => (
              <option
                key={option}
                data-testid={option}
                className={styles.selectOption}
                value={option}
              >
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  compId: PropTypes.string,
  onChange: PropTypes.func,
};
