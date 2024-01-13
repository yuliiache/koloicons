import {FC} from 'react';

import {SELECT_TEST_ID} from './constants';
import styles from './Select.module.scss';

interface Props {
  label?: string;
  name?: string;
  options?: string[];
  value?: string;
  compId?: string;
  onChange?: () => void;
}

export const Select: FC<Props> = ({label, name, options = [], value = '', compId = 'selectId', onChange}) => {
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
