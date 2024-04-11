import classnames from 'classnames';
import {FC, MouseEventHandler, ReactElement} from 'react';

import {TooltipPlacement} from '../Tooltip/constants';
import Tooltip from '../Tooltip/Tooltip';
import styles from './ButtonIcon.module.scss';
import {BUTTON_ICON_TEST_ID, ButtonIconType, ButtonSize} from './constants';

interface ButtonIconProps {
  children: ReactElement;
  type: ButtonIconType;
  id?: string;
  isDisabled?: boolean;
  tooltipLabel?: string;
  tooltipPlacement?: TooltipPlacement;
  onClick?: MouseEventHandler<HTMLElement>;
  size?: ButtonSize;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  id,
  children,
  type,
  isDisabled,
  tooltipLabel,
  tooltipPlacement,
  onClick,
  size = ButtonSize.BIG,
}) => {
  const buttonIconClasses = classnames(styles.button, styles[`button-${type}`], styles[`button-${size}`]);
  const tooltipId = id ? id : tooltipLabel;

  return (
    <Tooltip
      id={tooltipId}
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
};
export default ButtonIcon;
