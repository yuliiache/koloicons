import {useAppDispatch, useAppSelector} from 'app/hooks';
import {useEffect, useState} from 'react';

import {iconCategoriesSelector} from './components/Categories/selectors';
import {getIconCategoriesStartAction} from './components/Categories/slice/categoriesSlice';
import {
  getIconsByCategoryStartAction,
  getIconsStartAction,
  resetIconsAction,
} from './components/IconsPageContent/slice/iconsContentSlice';
import useIconSearch from './components/IconsPagePanel/useIconSearch';

interface iconsPageHookReturnType {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  setIsLeftPanelOpen: (value: boolean) => void;
  setIsRightPanelOpen: (value: boolean) => void;
}

export const useIconsPage = (): iconsPageHookReturnType => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const {currentSearchQuery} = useIconSearch();
  const categories = useAppSelector(iconCategoriesSelector);
  const categoriesLoaded = categories.categoriesList.length > 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIconCategoriesStartAction());
  }, []);

  useEffect(() => {
    if (!currentSearchQuery && categoriesLoaded) {
      dispatch(getIconsByCategoryStartAction());
    } else if (currentSearchQuery) {
      dispatch(getIconsStartAction(currentSearchQuery));
    }
    return () => {
      dispatch(resetIconsAction());
    };
  }, [currentSearchQuery, categoriesLoaded]);

  return {
    isLeftPanelOpen,
    isRightPanelOpen,
    setIsLeftPanelOpen,
    setIsRightPanelOpen,
  };
};
