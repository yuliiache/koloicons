import {useAppDispatch} from 'app/hooks';
import {useEffect, useState} from 'react';

import {getIconCategoriesStartAction} from './components/Categories/slice/categoriesSlice';

interface iconsPageHookReturnType {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  setIsLeftPanelOpen: (value: boolean) => void;
  setIsRightPanelOpen: (value: boolean) => void;
}

export const useIconsPage = (): iconsPageHookReturnType => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIconCategoriesStartAction());
  }, []);

  return {
    isLeftPanelOpen,
    isRightPanelOpen,
    setIsLeftPanelOpen,
    setIsRightPanelOpen,
  };
};
