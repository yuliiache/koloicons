import {Icon as IconType} from '@kolo/types/icon';
import {AdaptiveImage} from '@kolo/uiKit/AdaptiveImage/AdaptiveImage';
import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import React from 'react';

import styles from './CollectionIconCard.module.scss';

const {wrapper, buttons, imageWrapper, iconCard} = styles;

interface CollectionCardProps {
  icon: IconType;
  categoryNumber: number;
  categoryName: string;
  isFree: boolean;
}

const CollectionIconCard: React.FC<CollectionCardProps> = ({icon, categoryNumber, categoryName, isFree}) => {
  const actionIcon = <Icon.Close />;
  const tooltipLabel = 'Remove';
  const iconCardClasses = `${iconCard}`;

  const deleteFromCollectionHandle = () => {
    console.log('delete'); //TODO: dispatch delete action 
  };

  return (
    <div className={iconCardClasses}>
      <div className={wrapper}>
        <div className={buttons}>
          <ButtonIcon
            type={ButtonIconType.ROUND}
            tooltipLabel={tooltipLabel}
            onClick={deleteFromCollectionHandle}
          >
            {actionIcon}
          </ButtonIcon>
        </div>
        <div className={imageWrapper}>
          <AdaptiveImage
            icon={icon}
            categoryNumber={categoryNumber}
            categoryName={categoryName}
            isFree={isFree}
            withWatermark={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionIconCard;
