import {FC} from 'react';

import {TOGGLE_TEST_ID} from './constants';
import styles from './Toggle.module.scss';

interface Props {
  name: string;
  compId?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: () => void;
}

export const Toggle: FC<Props> = ({name, compId = 'toggleId', isChecked = false, isDisabled = false, onChange}) => {
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
