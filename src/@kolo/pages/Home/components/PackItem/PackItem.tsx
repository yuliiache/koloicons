import {AdaptiveImage} from '@kolo/uiKit/AdaptiveImage/AdaptiveImage';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import {LabelTheme} from '@kolo/uiKit/Label/constants';
import Label from '@kolo/uiKit/Label/Label';
import React, {FC} from 'react';

import {BUTTON_TEXT, LABEL_TEXT, PACK_ITEM_TEST_ID} from './constatnts';
import styles from './PackItem.module.scss';
import {Icon as IconType} from './types/Icon';
import {usePackItem} from './usePackItem';

interface Props {
  title: string;
  iconsAmount: number;
  icons: IconType[];
  isFree: boolean;
  onClick: () => void;
  categoryId: string;
}

const PackItem: FC<Props> = ({title, iconsAmount, icons, isFree, onClick, categoryId}) => {
  const {handleDownloadIcons} = usePackItem(categoryId);

  return (
    <div
      className={styles['pack-item']}
      data-testid={PACK_ITEM_TEST_ID}
      onClick={onClick}
    >
      <header className={styles['pack-item__header']}>
        <h3
          className={styles['pack-item__title']}
          title={title}
        >
          {title}
        </h3>
        <div className={styles['pack-item__tags-wrapper']}>
          <Label
            text={LABEL_TEXT}
            theme={LabelTheme.SUCCESS}
          />
          <Label text={icons.length.toString()} />
        </div>
      </header>
      <ul className={styles['pack-item__list']}>
        {icons.map((icon) => (
          <li key={icon.id}>
            <AdaptiveImage
              withWatermark={false}
              categoryName={title}
              categoryNumber={iconsAmount}
              icon={icon}
              isFree={isFree}
            />
          </li>
        ))}
      </ul>
      <Button
        text={BUTTON_TEXT}
        color={ButtonColor.ACCENT}
        size={ButtonSize.FULL_WIDTH}
        onClick={handleDownloadIcons}
      >
        <Icon.Download className={styles['pack-item__icon']} />
      </Button>
    </div>
  );
};

export default PackItem;
