import {Checkbox} from '@kolo/uiKit/Checkbox/Checkbox';
import {FC, useState} from 'react';

import {Section} from '../Section/Section';
import styles from './Checkboxes.module.scss';

const Checkboxes: FC = () => {
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
    <Section title="Checkbox">
      <div className={styles.checkboxesWrapper}>
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
    </Section>
  );
};

export default Checkboxes;
