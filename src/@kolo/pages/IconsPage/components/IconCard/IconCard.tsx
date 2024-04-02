import {Icon as IconType} from '@kolo/types/icon';
import {AdaptiveImage} from '@kolo/uiKit/AdaptiveImage/AdaptiveImage';
import ModalBox from '@kolo/uiKit/Portal/ModalBox';
import useModal from '@kolo/uiKit/Portal/useModalBox';
import React from 'react';

import DownloadModal from '../DownloadModal/DownloadModal';
import IconCardButton from '../IconCardButton/IconCardButton';
import useIconCard from './hooks/useIconCard';
import styles from './IconCard.module.scss';

const {wrapper, buttons, title, imageWrapper, iconCard, iconCardAdded} = styles;

export interface IconCardProps {
  icon: IconType;
  categoryNumber: number;
  categoryName: string;
  isFree: boolean;
  iconId: string;
}

const IconCard: React.FC<IconCardProps> = ({icon, categoryNumber, categoryName, isFree, iconId}) => {
  const {openModal, isOpen, closeModal, modalPropagationHandle} = useModal();
  const {isAdded} = useIconCard();
  const iconCardClasses = `${iconCard} ${isAdded ? iconCardAdded : ''}`;

  return (
    <>
      <div
        className={iconCardClasses}
        onClick={openModal}
      >
        <div className={wrapper}>
          <div
            className={buttons}
            onClick={modalPropagationHandle}
          >
            <IconCardButton />
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
      <ModalBox
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <DownloadModal
          isFree={false}
          iconId={iconId}
        />
      </ModalBox>
    </>
  );
};

export default IconCard;
