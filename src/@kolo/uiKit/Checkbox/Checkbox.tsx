import classNames from 'classnames';
import {FC} from 'react';

import styles from './Checkbox.module.scss';

interface Props {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
}

export const Checkbox: FC<Props> = ({id, onChange, isChecked, hasError = false, isDisabled = false}) => {
  const errorMessage = 'Required';

  const checkboxClasses = classNames(styles.checkbox__indicator, {
    [styles['checkbox__indicator--error']]: hasError,
  });

  return (
    <label className={styles.checkbox}>
      <input
        className={styles.checkbox__input}
        id={id}
        type="checkbox"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />
      <span className={checkboxClasses}></span>
      {hasError && <span className={styles.checkbox__error}>{errorMessage}</span>}
    </label>
  );
};
