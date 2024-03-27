import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import Icon from '@kolo/uiKit/Icons';
import {LinkType} from '@kolo/uiKit/Link/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';
import React, {FC} from 'react';

import styles from './UnlockAllFormats.module.scss';

interface Props {
  price: number;
}

const UnlockAllFormats: FC<Props> = ({price}) => {
  return (
    <div className={styles['formats__wrapper']}>
      <div className={styles['formats__text--desktop']}>
        <div className={styles['formats__text__unlock-icon']}>
          <Icon.Unlock />
        </div>
        <h3 className={styles['formats__text__heading']}>Unlock all Formats</h3>
        <p className={styles['formats__text__details']}>
          All icons in any size and format:
          <br />
          SVG and PNG
        </p>
        <div className={styles['formats__text__benefits']}>
          <Link
            url={AppRoute.PRICING}
            type={LinkType.ACCENT}
          >
            All Benefits
          </Link>
        </div>
      </div>
      <ButtonLink
        size={ButtonSize.FULL_WIDTH}
        text="Purchase"
        url={AppRoute.PRICING}
        color={ButtonColor.ACCENT}
      >
        {`$${price.toFixed(2)}`}
        <span className={styles['purchase-button__period']}>/mo</span>
      </ButtonLink>
    </div>
  );
};

export default UnlockAllFormats;
