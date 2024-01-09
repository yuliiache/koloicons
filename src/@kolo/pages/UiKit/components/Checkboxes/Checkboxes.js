import React, {useState} from 'react';
import {Checkbox} from '@kolo/uiKit/Checkbox/Checkbox';

export const Checkboxes = () => {
  const [isUnchecked, setIsUnchecked] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRequired, setIsRequired] = useState(false);

  const toggleCheckbox = () => {
    setIsUnchecked(!isUnchecked);
  };

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const toggleError = () => {
    setIsRequired(!isRequired);
  };

  return (
    <div>
      <Checkbox
        id="default"
        isChecked={isUnchecked}
        onChange={toggleCheckbox}
      />
      <Checkbox
        id="checked"
        isChecked={isChecked}
        onChange={toggleChecked}
      />
      <Checkbox
        id="disabled"
        isChecked={isDisabled}
        onChange={toggleDisabled}
        isDisabled
      />
      <Checkbox
        id="error"
        isChecked={isRequired}
        onChange={toggleError}
        hasError={!isRequired}
      />
    </div>
  );
};
