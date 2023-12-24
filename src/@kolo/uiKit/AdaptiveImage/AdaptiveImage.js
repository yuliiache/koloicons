import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {getIconSrc, IMG_SIZE, IMG_SIZE_WATERMARK} from '@kolo/services';
import PropTypes from 'prop-types';

import {Icons} from '../Icons';

import styles from './AdaptiveImage.module.scss';

export const AdaptiveImage = ({icon, categoryNumber, categoryName, isFree, withWatermark}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={styles.adaptiveImage}>
      <CSSTransition
        key="adaptiveImageLoader"
        unmountOnExit
        timeout={500}
        in={!isImageLoaded}
        out={isImageLoaded ? 'true' : undefined}
        classNames={styles.adaptiveImageLoader}
      >
        <div className={styles.adaptiveImageLoader}>
          <Icons.IconLoader />
        </div>
      </CSSTransition>

      <CSSTransition
        key="adaptiveImagePicture"
        timeout={500}
        in={isImageLoaded}
        classNames={styles.adaptiveImagePicture}
      >
        <picture className={styles.adaptiveImagePicture}>
          <img
            data-testid={icon.id}
            data-isfree={isFree ? 'free' : 'notfree'}
            src={getIconSrc({
              icon,
              categoryNumber,
              categoryName,
              withWatermark,
            })}
            srcSet={getIconSrc({
              icon,
              categoryNumber,
              categoryName,
              isRetina: true,
              withWatermark,
            })}
            width={withWatermark ? IMG_SIZE_WATERMARK : IMG_SIZE}
            height={withWatermark ? IMG_SIZE_WATERMARK : IMG_SIZE}
            loading="lazy"
            alt={icon.name}
            onLoad={() => setIsImageLoaded(true)}
          />
        </picture>
      </CSSTransition>
    </div>
  );
};

AdaptiveImage.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.string,
    size: PropTypes.string,
  }),
  categoryNumber: PropTypes.number,
  categoryName: PropTypes.string,
  isFree: PropTypes.bool,
  withWatermark: PropTypes.bool,
};
