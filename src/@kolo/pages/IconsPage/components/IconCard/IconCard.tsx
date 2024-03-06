import {Icon as IconType} from '@kolo/types/icon';
import {AdaptiveImage} from '@kolo/uiKit/AdaptiveImage/AdaptiveImage';
import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import React from 'react';

import useIconCard from './hooks/useIconCard';
import styles from './IconCard.module.scss';

const {wrapper, buttons, title, imageWrapper, iconCard, iconCardAdded} = styles;

interface IconCardProps {
  icon: IconType;
  categoryNumber: number;
  categoryName: string;
  isFree: boolean;
}

const IconCard: React.FC<IconCardProps> = ({icon, categoryNumber, categoryName, isFree}) => {
  const {isAdded, handleClick} = useIconCard();

  const actionIcon = isAdded ? <Icon.Close /> : <Icon.Add />;
  const tooltipLabel = isAdded ? 'Remove from collection' : 'Add to collection';
  const iconCardClasses = `${iconCard} ${isAdded ? iconCardAdded : ''}`;

  return (
    <div className={iconCardClasses}>
      <div className={wrapper}>
        <div className={buttons}>
          <ButtonIcon
            type={ButtonIconType.ROUND}
            tooltipLabel={tooltipLabel}
            onClick={handleClick}
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
      <span className={title}>{icon.name}</span>
    </div>
  );
};

export default IconCard;
