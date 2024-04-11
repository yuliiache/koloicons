import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import {TooltipPlacement} from '@kolo/uiKit/Tooltip/constants';
import {FC} from 'react';

import styles from './ButtonIconWrap.module.scss';

const ButtonIconWrap: FC = () => {
  return (
    <div className={styles.buttonIconWrap}>
      <ButtonIcon type={ButtonIconType.ROUNDED_SQUARE}>
        <Icon.Add />
      </ButtonIcon>
      <ButtonIcon
        type={ButtonIconType.ROUNDED_SQUARE}
        isDisabled
      >
        <Icon.Add />
      </ButtonIcon>
      <ButtonIcon
        type={ButtonIconType.ROUNDED_SQUARE}
        tooltipLabel="Add"
        id="test"
      >
        <Icon.Add />
      </ButtonIcon>
      <ButtonIcon type={ButtonIconType.ROUND}>
        <Icon.Add />
      </ButtonIcon>
      <ButtonIcon
        type={ButtonIconType.ROUND}
        tooltipLabel="Add"
        tooltipPlacement={TooltipPlacement.TOP}
        id="test2"
      >
        <Icon.Add />
      </ButtonIcon>
      <ButtonIcon
        type={ButtonIconType.ROUND}
        isDisabled
      >
        <Icon.Add />
      </ButtonIcon>
    </div>
  );
};

export default ButtonIconWrap;
