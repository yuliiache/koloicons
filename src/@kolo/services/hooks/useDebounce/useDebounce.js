import {useEffect, useState} from 'react';

import {DEBOUNCE_INTERVAL} from './constants';

export const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, DEBOUNCE_INTERVAL);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
