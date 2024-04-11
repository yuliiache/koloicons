import classnames from 'classnames';
import {FC} from 'react';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import {ButtonIconType} from '../ButtonIcon/constants';
import Icon from '../Icons';
import {CANCEL_BUTTON_WRAP_TEST_ID, SEARCH_BUTTON_WRAP_TEST_ID, SEARCH_INPUT_TEST_ID} from './constants';
import styles from './Search.module.scss';
import useSearch from './useSearch';

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
  isFocused?: boolean;
  isRounded?: boolean;
}

const Search: FC<Props> = ({placeholder, onSearch, isFocused = false, isRounded = true}) => {
  const {inputValue, onInputChange, onSearchHandle, onClearBtnClick} = useSearch(onSearch);
  const searchWrapClasses = classnames(styles.searchWrap, {
    [styles.rounded]: isRounded,
  });

  return (
    <div className={searchWrapClasses}>
      <input
        data-testid={SEARCH_INPUT_TEST_ID}
        className={styles.input}
        type="text"
        id="search-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        autoFocus={isFocused}
      />

      <div
        className={styles.searchBtn}
        data-testid={SEARCH_BUTTON_WRAP_TEST_ID}
      >
        <ButtonIcon
          type={ButtonIconType.SQUARE}
          onClick={onSearchHandle}
        >
          <Icon.Search className={styles.iconSearch} />
        </ButtonIcon>
      </div>

      {inputValue && (
        <div
          className={styles.cancelBtn}
          data-testid={CANCEL_BUTTON_WRAP_TEST_ID}
        >
          <ButtonIcon
            id={'search-clear'}
            type={ButtonIconType.SQUARE}
            tooltipLabel="Clear"
            onClick={onClearBtnClick}
          >
            <Icon.Cancel className={styles.iconCancel} />
          </ButtonIcon>
        </div>
      )}
    </div>
  );
};

export default Search;
