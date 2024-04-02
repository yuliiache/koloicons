import {IconStyle} from '@kolo/constants/constants';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {useEffect} from 'react';

import useIconSearch from '../../useIconSearch';
import {getIconsByQueryStartAction, IconByQuery, loadMoreIconsAction} from './iconSearchSlice';
import {hasMoreIconsSelector, iconsByQuerySelector} from './selectors';

interface UseIconsByQuery {
  iconsSearchResult: IconByQuery[];
  hasMoreIcons: boolean;
  handleLoadMoreIcons: (value: string | null) => void;
  iconName: string | null;
  getPreferredStyle: (value: IconStyle[]) => IconStyle;
}

const useIconsByQuery = (): UseIconsByQuery => {
  const dispatch = useAppDispatch();
  const iconsSearchResult: IconByQuery[] = useAppSelector(iconsByQuerySelector);
  const hasMoreIcons: boolean = useAppSelector(hasMoreIconsSelector);
  const {currentSearchQuery} = useIconSearch();

  useEffect(() => {
    dispatch(getIconsByQueryStartAction(currentSearchQuery));
  }, [currentSearchQuery]);

  const handleLoadMoreIcons = (currentSearchQuery: string | null): void => {
    dispatch(loadMoreIconsAction(currentSearchQuery));
  };

  const iconName = currentSearchQuery && currentSearchQuery?.charAt(0).toUpperCase() + currentSearchQuery?.slice(1);

  function getPreferredStyle(styles: IconStyle[]): IconStyle {
    const preferredOrder = ['line', 'solid'];
    return styles.find((style) => preferredOrder.includes(style)) || styles[0];
  }

  return {iconsSearchResult, hasMoreIcons, handleLoadMoreIcons, iconName, getPreferredStyle};
};

export default useIconsByQuery;
