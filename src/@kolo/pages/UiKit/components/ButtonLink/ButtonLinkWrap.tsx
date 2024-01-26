import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import {AppRoutes} from 'app/AppRoutes';
import {FC} from 'react';

import styles from './ButtonLinkWrap.module.scss';

export const ButtonLinkWrap: FC = () => {
  return (
    <div className={styles.buttonLinkWrap}>
      <ButtonLink
        text="Button link"
        url={AppRoutes.HOME}
      />
    </div>
  );
};
