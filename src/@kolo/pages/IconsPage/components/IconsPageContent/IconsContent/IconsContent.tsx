import {IconWithCategory} from '@kolo/types/icon';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import {TooltipPlacement} from '@kolo/uiKit/Tooltip/constants';
import {FC} from 'react';

import IconCard from '../../IconCard/IconCard';
import styles from './IconsContent.module.scss';
import useIconsContent from './useIconsContent';

const IconsContent: FC = () => {
  const {categorizedIcons, hasMoreCategories, isPro, handleLoadMoreIconsByCategory, handleDownloadIconsByCategory} =
    useIconsContent();

  const tooltipLabel: string = isPro ? 'Download icons' : 'Only for Pro users';

  return (
    <div className={styles.iconsPage}>
      <div>
        {Object.entries(categorizedIcons).map(([categoryName, icons]) => (
          <div key={categoryName}>
            <div className={styles.header}>
              <div className={styles.folderIcon}>
                <Icon.Folder />
              </div>
              <h2>{categoryName}</h2>
              <div className={styles.downloadButton}>
                <ButtonIcon
                  id={categoryName}
                  type={ButtonIconType.SQUARE}
                  isDisabled={!isPro}
                  tooltipLabel={tooltipLabel}
                  tooltipPlacement={TooltipPlacement.RIGHT}
                  onClick={() => handleDownloadIconsByCategory(categoryName)}
                >
                  <Icon.Download />
                </ButtonIcon>
              </div>
            </div>
            <ul className={styles.iconsContentList}>
              {icons.map(({id, name, style, size, category: {number: categoryNumber}}: IconWithCategory) => (
                <li key={id}>
                  <IconCard
                    icon={{name, style, size, id}}
                    iconId={id}
                    categoryNumber={categoryNumber}
                    categoryName={categoryName}
                    isFree={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {hasMoreCategories && (
        <div className={styles.button}>
          <Button
            text="Load More"
            onClick={() => handleLoadMoreIconsByCategory()}
            color={ButtonColor.BASIC}
            size={ButtonSize.FULL_WIDTH}
          />
        </div>
      )}
    </div>
  );
};

export default IconsContent;
