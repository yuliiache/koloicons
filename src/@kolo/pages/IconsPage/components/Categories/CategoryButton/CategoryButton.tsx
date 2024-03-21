import classnames from 'classnames';
import React, {MouseEventHandler} from 'react';

import styles from './CategoryButton.module.scss';

interface CategoryButtonProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({name, onClick, isActive}) => {
  const buttonClasses = classnames(styles.categoryButton, {
    [styles['categoryButton-active']]: isActive,
  });

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
