import {IconWithCategory} from '@kolo/types/icon';
import {useAppDispatch, useAppSelector} from 'app/hooks';

import useIconSearch from '../../IconsPagePanel/useIconSearch';
import {getIconsStartAction} from '../slice/iconsContentSlice';
import {hasMoreIconsSelector, iconsByQuerySelector} from './selectors';

interface UseIconsByQuery {
  iconsSearchResult: IconWithCategory[];
  hasMoreIcons: boolean;
  handleLoadMoreIcons: (value: string | null) => void;
  iconName: string | null;
}

const useIconsByQuery = (): UseIconsByQuery => {
  const dispatch = useAppDispatch();
  const iconsSearchResult: IconWithCategory[] = useAppSelector(iconsByQuerySelector);
  const hasMoreIcons: boolean = useAppSelector(hasMoreIconsSelector);
  const {currentSearchQuery} = useIconSearch();

  const handleLoadMoreIcons = (currentSearchQuery: string | null): void => {
    dispatch(getIconsStartAction(currentSearchQuery));
  };

  const iconName = currentSearchQuery && currentSearchQuery?.charAt(0).toUpperCase() + currentSearchQuery?.slice(1);

  return {iconsSearchResult, hasMoreIcons, handleLoadMoreIcons, iconName};
};

export default useIconsByQuery;
