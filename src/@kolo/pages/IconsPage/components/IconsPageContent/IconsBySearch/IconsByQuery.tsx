import IconCard from '@kolo/pages/IconsPage/components/IconCard/IconCard';
import {IconWithCategory} from '@kolo/types/icon';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import {FC} from 'react';

import useIconSearch from '../../IconsPagePanel/useIconSearch';
import styles from './IconsByQuery.module.scss';
import useIconsByQuery from './useIconsByQuery';

const IconsByQuery: FC = () => {
  const {iconsSearchResult, hasMoreIcons, handleLoadMoreIcons, iconName} = useIconsByQuery();
  const {currentSearchQuery} = useIconSearch();

  return (
    <div className={styles.searchPage}>
      <div>
        <div className={styles.header}>
          <div className={styles.searchIcon}>
            <Icon.Search />
          </div>
          <h2>
            Search Results:<span>{iconName}</span>
          </h2>
        </div>
        <ul className={styles.iconsSearchResult}>
          {iconsSearchResult.map(
            ({id, name, style, size, category: {name: categoryName, number: categoryNumber}}: IconWithCategory) => {
              return (
                <li key={id}>
                  <IconCard
                    icon={{name, style, size, id}}
                    iconId={id}
                    categoryNumber={categoryNumber}
                    categoryName={categoryName}
                    isFree={false}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
      {hasMoreIcons && (
        <div className={styles.button}>
          <Button
            text="Load More"
            onClick={() => handleLoadMoreIcons(currentSearchQuery)}
            color={ButtonColor.BASIC}
            size={ButtonSize.FULL_WIDTH}
          />
        </div>
      )}
    </div>
  );
};

export default IconsByQuery;
