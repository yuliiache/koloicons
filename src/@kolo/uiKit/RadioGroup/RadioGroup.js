import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton/RadioButton';

import styles from './RadioGroup.module.scss';

const {radioGroup} = styles;

const RadioGroup = ({options, currentValue, onChange}) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={radioGroup}>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          option={option}
          isSelected={currentValue === option.value}
          onChange={handleOnChange}
        />
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    }).isRequired
  ),
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroup;
