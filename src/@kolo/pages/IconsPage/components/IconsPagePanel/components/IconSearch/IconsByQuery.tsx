import IconCard from '@kolo/pages/IconsPage/components/IconCard/IconCard';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import {FC} from 'react';

import useIconSearch from '../../useIconSearch';
import styles from './IconsByQuery.module.scss';
import {IconByQuery} from './iconSearchSlice';
import useIconsByQuery from './useIconsByQuery';

const IconsByQuery: FC = () => {
  const {iconsSearchResult, hasMoreIcons, handleLoadMoreIcons, iconName, getPreferredStyle} = useIconsByQuery();
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
            ({id, name, style, size, category: {name: categoryName, number: categoryNumber}}: IconByQuery) => {
              const iconStyle = getPreferredStyle(style);
              return (
                <li key={id}>
                  <IconCard
                    icon={{name, style: iconStyle, size, id}}
                    iconId={id}
                    categoryNumber={categoryNumber}
                    categoryName={categoryName}
                    isFree={true}
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
