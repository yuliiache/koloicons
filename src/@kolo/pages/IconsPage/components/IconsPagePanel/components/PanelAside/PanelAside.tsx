import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType, ButtonSize} from '@kolo/uiKit/ButtonIcon/constants';
import ColorPicker from '@kolo/uiKit/ColorPicker/ColorPicker';
import {ColorPickerSize} from '@kolo/uiKit/ColorPicker/constants';
import Icon from '@kolo/uiKit/Icons';
import Label from '@kolo/uiKit/Label/Label';
import {useAppSelector} from 'app/hooks';
import classnames from 'classnames';
import {FC, ReactElement, ReactNode} from 'react';

import styles from './PanelAside.module.scss';

interface PanelAsideProps {
  title: string;
  openPanel: () => void;
  closePanel: () => void;
  isOpened: boolean;
  children?: ReactNode;
  icon?: ReactElement;
  isCollection?: boolean;
}

const PanelAside: FC<PanelAsideProps> = ({
  title,
  openPanel,
  closePanel,
  icon,
  isOpened = false,
  isCollection = false,
}) => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const asideClasses = classnames(styles.aside, {
    [styles.opened]: isOpened,
  });
  const numberAddedToCollection = 4; //TODO: Get data from store

  return (
    <div
      className={asideClasses}
      onClick={openPanel}
    >
      <div className={styles.panelContent}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <p className={styles.title}>{title}</p>
        {isAuthenticated && isCollection && <Label text={numberAddedToCollection.toString()} />}
        {isOpened && isCollection && (
          <>
            <div className={styles.colorPicker}>
              <ColorPicker
                onChange={() => null}
                size={ColorPickerSize.SMALL}
              />
            </div>
            {numberAddedToCollection > 0 && (
              <ButtonIcon
                tooltipLabel="Clear"
                type={ButtonIconType.ROUND}
                size={ButtonSize.SMALL}
              >
                <Icon.Delete />
              </ButtonIcon>
            )}
          </>
        )}
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
