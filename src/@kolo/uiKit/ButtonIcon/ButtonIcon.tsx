import classnames from 'classnames';
import {FC, MouseEventHandler, ReactElement} from 'react';

import {TooltipPlacement} from '../Tooltip/constants';
import Tooltip from '../Tooltip/Tooltip';
import styles from './ButtonIcon.module.scss';
import {BUTTON_ICON_TEST_ID, ButtonIconType} from './constants';

interface ButtonIconProps {
  children: ReactElement;
  type: ButtonIconType;
  isDisabled?: boolean;
  tooltipLabel?: string;
  tooltipPlacement?: TooltipPlacement;
  onClick?: MouseEventHandler<HTMLElement>;
  classModifier?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  type,
  isDisabled,
  tooltipLabel,
  tooltipPlacement,
  onClick,
  classModifier,
}) => {
  const buttonIconClasses = classnames(
    styles.button,
    styles[`button-${type}`],
    {
      [styles['button-disabled']]: isDisabled,
    },
    {[styles[`${classModifier}`]]: classModifier}
  );

  if (tooltipLabel) {
    return (
      <Tooltip
        label={tooltipLabel}
        placement={tooltipPlacement}
      >
        <button
          data-testid={BUTTON_ICON_TEST_ID}
          className={buttonIconClasses}
          onClick={onClick}
          disabled={isDisabled}
        >
          {children}
        </button>
      </Tooltip>
    );
  }

  return (
    <button
      data-testid={BUTTON_ICON_TEST_ID}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonIconClasses}
    >
      {children}
    </button>
  );
};
export default ButtonIcon;
