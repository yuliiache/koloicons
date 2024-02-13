import {KeyCode} from '@kolo/constants/constants';
import {ChangeEvent, useCallback, useEffect, useState} from 'react';

interface SearchHookReturnType {
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearBtnClick: () => void;
  onSearchHandle: () => void;
}

const useSearch = (onSearch: (value: string) => void): SearchHookReturnType => {
  const [inputValue, setInputValue] = useState('');
  const trimmedValue: string = inputValue.trim();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onEnterClick: (e: KeyboardEvent) => void = useCallback(
    (e) => {
      if (e.code === KeyCode.ENTER) {
        onSearchHandle();
      }
    },
    [trimmedValue, onSearch]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEnterClick);

    return () => {
      window.removeEventListener('keydown', onEnterClick);
    };
  }, [onEnterClick]);

  const onSearchHandle = () => {
    if (trimmedValue) {
      onSearch(trimmedValue);
    }
  };

  const onClearBtnClick = () => {
    setInputValue('');
  };

  return {
    inputValue,
    onInputChange,
    onClearBtnClick,
    onSearchHandle,
  };
};

export default useSearch;
