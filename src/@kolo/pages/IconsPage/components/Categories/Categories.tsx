import {FC} from 'react';

import styles from './Categories.module.scss';
import CategoryButton from './CategoryButton/CategoryButton';
import useCategories from './hooks/useCategories';
import useCategory from './hooks/useCategory';
import {CategoriesData} from './slice/categoriesSlice';

const {categoryList, item} = styles;

const Categories: FC = () => {
  const {categoriesList} = useCategories();
  const {activeCategoryId, handleCategoryClick} = useCategory();

  return (
    <ul className={categoryList}>
      {categoriesList.map(({name, id}: CategoriesData) => (
        <li
          key={id}
          className={item}
        >
          <CategoryButton
            name={name}
            onClick={() => handleCategoryClick(id)}
            isActive={id === activeCategoryId}
          />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
