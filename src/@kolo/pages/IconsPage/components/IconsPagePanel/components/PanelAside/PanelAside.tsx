import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import classnames from 'classnames';
import React, {FC, ReactElement} from 'react';

import styles from './PanelAside.module.scss';

interface PanelAsideProps {
  title: string;
  openPanel: () => void;
  closePanel: () => void;
  isOpened: boolean;
  icon?: ReactElement;
}

const PanelAside: FC<PanelAsideProps> = ({title, openPanel, closePanel, icon, isOpened = false}) => {
  const asideClasses = classnames(styles.aside, {
    [styles.opened]: isOpened,
  });

  return (
    <div
      className={asideClasses}
      onClick={openPanel}
    >
      <div className={styles.panelContent}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <p className={styles.title}>{title}</p>
      </div>
      {isOpened && (
        <>
          <ButtonIcon
            type={ButtonIconType.SQUARE}
            onClick={closePanel}
          >
            <Icon.Close width="16px" />
          </ButtonIcon>
        </>
      )}
    </div>
  );
};
export default PanelAside;
