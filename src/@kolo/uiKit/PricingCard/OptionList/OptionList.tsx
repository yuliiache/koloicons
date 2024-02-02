import {FC} from 'react';

import styles from './OptionList.module.scss';

interface OptionListProps {
  title: string;
  list: string[];
}
const OptionList: FC<OptionListProps> = ({title, list}) => {
  return (
    <>
      <dt className={styles.optionTitle}>{title}</dt>
      {list.map((item) => (
        <dd
          key={item}
          className={styles.optionVal}
        >
          <span> - </span>
          {item}
        </dd>
      ))}
    </>
  );
};

export default OptionList;
