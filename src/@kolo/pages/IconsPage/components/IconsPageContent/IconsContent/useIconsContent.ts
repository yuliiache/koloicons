import {userSelector} from '@kolo/pages/LoginPage/selectors';
import {downloadIconsFilesByCategory} from '@kolo/services/helpers/downloadIcon';
import {IconWithCategory} from '@kolo/types/icon';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {useEffect, useState} from 'react';

import {iconCategoriesSelector} from '../../Categories/selectors';
import {getIconsByCategoryStartAction} from '../slice/iconsContentSlice';
import {hasMoreCategoriesSelector, iconsContentSelector} from './selectors';

interface UseIconsContent {
  categorizedIcons: CategorizedIcons;
  hasMoreCategories: boolean;
  handleLoadMoreIconsByCategory: () => void;
  handleDownloadIconsByCategory: (categoryName: string) => void;
  isPro: boolean;
}

interface CategorizedIcons {
  [categoryName: string]: IconWithCategory[];
}

const useIconsContent = (): UseIconsContent => {
  const dispatch = useAppDispatch();
  const iconsContent: IconWithCategory[] = useAppSelector(iconsContentSelector);
  const hasMoreCategories: boolean = useAppSelector(hasMoreCategoriesSelector);
  const {categoriesList} = useAppSelector(iconCategoriesSelector);
  const {isPro} = useAppSelector(userSelector);
  const {id} = useAppSelector(userSelector);
  const [categorizedIcons, setCategorizedIcons] = useState<CategorizedIcons>({});

  useEffect(() => {
    const categories = iconsContent.reduce<CategorizedIcons>((acc, icon) => {
      const {
        category: {name: categoryName},
      } = icon;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(icon);
      return acc;
    }, {});
    setCategorizedIcons(categories);
  }, [iconsContent]);

  const handleLoadMoreIconsByCategory = (): void => {
    dispatch(getIconsByCategoryStartAction());
  };

  const findCategoryIdByName = (categoryName: string): string | undefined => {
    const category = categoriesList.find((cat) => cat.name === categoryName);
    return category?.id;
  };

  const handleDownloadIconsByCategory = (categoryName: string): void => {
    const categoryId = findCategoryIdByName(categoryName);
    if (categoryId) {
      downloadIconsFilesByCategory({categoryId, userId: id});
    }
  };

  return {categorizedIcons, hasMoreCategories, handleLoadMoreIconsByCategory, handleDownloadIconsByCategory, isPro};
};

export default useIconsContent;
