import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {RADIO_BUTTON_TEST_ID} from './constant';

import styles from './RadioButton.module.scss';

const {radioButton, radioButtonActive, radioButtonInput, radioButtonLabel} = styles;

const RadioButton = ({option: {id, value, name, label}, isSelected, onChange}) => {
  return (
    <div
      tabIndex={0}
      className={classnames(radioButton, {[radioButtonActive]: isSelected})}
    >
      <input
        data-testid={RADIO_BUTTON_TEST_ID}
        className={radioButtonInput}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={radioButtonLabel}
      >
        {label}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
