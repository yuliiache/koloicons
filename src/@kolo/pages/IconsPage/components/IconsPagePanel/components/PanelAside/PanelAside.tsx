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
  children?: ReactElement;
  icon?: ReactElement;
}

const PanelAside: FC<PanelAsideProps> = ({title, openPanel, closePanel, isOpened = false, children, icon}) => {
  const panelAsideClasses = classnames(styles.asideContainer, {
    [styles.opened]: isOpened,
  });

  const asideClasses = classnames(styles.aside, {
    [styles.opened]: isOpened,
  });

  return (
    <div
      className={panelAsideClasses}
      onClick={openPanel}
    >
      <div className={asideClasses}>
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
      {isOpened && <div className={styles.asideContent}>{children}</div>}
    </div>
  );
};
export default PanelAside;
