import {useAppSelector} from 'app/hooks';

import {iconCategoriesSelector} from '../selectors';
import {CategoriesData} from '../slice/categoriesSlice';

interface CategoriesHookReturn {
  categoriesList: CategoriesData[];
}

const useCategories = (): CategoriesHookReturn => {
  const {categoriesList} = useAppSelector(iconCategoriesSelector);

  return {categoriesList};
};

export default useCategories;
