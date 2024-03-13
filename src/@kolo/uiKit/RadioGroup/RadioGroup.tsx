import React from 'react';

import RadioButton, {Option} from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';

const {radioGroup} = styles;

interface Props {
  options: Option[];
  currentValue: string;
  onChange: (value: string) => void;
}
const RadioGroup: React.FC<Props> = ({options, currentValue, onChange}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default RadioGroup;
