import React, {useState} from 'react';
import RadioGroup from '@kolo/uiKit/RadioGroup/RadioGroup';

import {options} from './options';

const RadioGroupWrapper = () => {
  const [value, setValue] = useState(options[0].value);

  return (
    <RadioGroup
      options={options}
      currentValue={value}
      onChange={setValue}
    />
  );
};

export default RadioGroupWrapper;
