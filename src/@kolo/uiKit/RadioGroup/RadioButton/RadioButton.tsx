import classnames from 'classnames';
import React from 'react';

import {RADIO_BUTTON_TEST_ID} from './constant';
import styles from './RadioButton.module.scss';

const {radioButton, radioButtonActive, radioButtonInput, radioButtonLabel} = styles;

export interface Option {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface Props {
  option: Option;
  isSelected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioButton: React.FC<Props> = ({option: {id, value, name, label}, isSelected, onChange}) => {
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

export default RadioButton;
