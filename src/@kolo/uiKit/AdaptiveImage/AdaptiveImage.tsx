import {IMG_SIZE, IMG_SIZE_WATERMARK} from '@kolo/services/helpers/constants';
import {getIconSrc} from '@kolo/services/helpers/getIconSrc';
import classnames from 'classnames';
import React, {useState} from 'react';

import {Icon} from '../../types/icon';
import Icons from '../Icons';
import styles from './AdaptiveImage.module.scss';

interface AdaptiveImageProps {
  icon: Icon;
  categoryNumber: number;
  categoryName: string;
  isFree: boolean;
  withWatermark: boolean;
}

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  icon,
  categoryNumber,
  categoryName,
  isFree,
  withWatermark,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const loaderClasses = classnames(styles.adaptiveImageLoader, {
    [styles.adaptiveImageLoaderHidden]: isImageLoaded,
  });

  const pictureClasses = classnames(styles.adaptiveImagePicture, {
    [styles.adaptiveImagePictureVisible]: isImageLoaded,
  });

  return (
    <div className={styles.adaptiveImage}>
      {!isImageLoaded && (
        <div className={loaderClasses}>
          <Icons.IconLoader />
        </div>
      )}

      <picture className={pictureClasses}>
        <img
          data-testid={icon.id}
          data-isfree={isFree ? 'free' : 'notfree'}
          src={getIconSrc({
            icon,
            categoryNumber,
            categoryName,
            isRetina: false,
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
    </div>
  );
};
