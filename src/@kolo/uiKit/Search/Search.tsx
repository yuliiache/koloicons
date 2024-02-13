import {FC} from 'react';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import {ButtonIconType} from '../ButtonIcon/constants';
import Icon from '../Icons';
import {TooltipPlacement} from '../Tooltip/constants';
import {CANCEL_BUTTON_WRAP_TEST_ID, SEARCH_BUTTON_WRAP_TEST_ID, SEARCH_INPUT_TEST_ID} from './constants';
import styles from './Search.module.scss';
import useSearch from './useSearch';

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
  isFocused?: boolean;
}

const Search: FC<Props> = ({placeholder, onSearch, isFocused = false}) => {
  const {inputValue, onInputChange, onSearchHandle, onClearBtnClick} = useSearch(onSearch);

  return (
    <div className={styles.searchWrap}>
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
            type={ButtonIconType.SQUARE}
            tooltipLabel="Clear"
            tooltipPlacement={TooltipPlacement.LEFT}
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
