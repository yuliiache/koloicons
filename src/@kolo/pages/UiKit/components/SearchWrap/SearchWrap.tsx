import Search from '@kolo/uiKit/Search/Search';

import {Section} from '../Section/Section';
import styles from './SearchWrap.module.scss';

const SearchWrap = () => {
  const onSearch: (value: string) => void = (value) => {
    console.log('Пошук за значенням:', value);
  };

  return (
    <Section title="Search">
      <div className={styles.searchWrap}>
        <Search
          placeholder="Search icon"
          onSearch={onSearch}
        />

        <Search
          placeholder="Search icon"
          onSearch={onSearch}
          isFocused={true}
        />
      </div>
    </Section>
  );
};

export default SearchWrap;
