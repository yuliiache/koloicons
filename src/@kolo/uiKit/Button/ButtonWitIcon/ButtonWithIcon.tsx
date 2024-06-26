import classnames from 'classnames';
import React, {ButtonHTMLAttributes, FC, ReactElement} from 'react';

import styles from '../Button.module.scss';
import {ButtonColor, ButtonContentPlacement, ButtonSize, ButtonType} from '../constants';
import stylesWithIcon from './ButtonWithIcon.module.scss';

interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;
  placement?: ButtonContentPlacement;
  icon?: ReactElement;
  additionalText?: string;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  text,
  onClick,
  isDisabled = false,
  icon,
  additionalText,
  placement = ButtonContentPlacement.LEFT,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.SMALL,
  type = ButtonType.BUTTON,
}) => {
  const buttonClasses = classnames(
    styles.button,
    styles[`button-${size}`],
    styles[`button-${color}`],
    styles[`button-${placement}`],
    {
      [styles['button-disabled']]: isDisabled,
      [styles['button-children']]: additionalText,
    }
  );

  const contentClasses = classnames(stylesWithIcon.buttonContent, {
    [stylesWithIcon['buttonContent-disabled']]: isDisabled,
  });

  const additionalTextClass = classnames({
    [stylesWithIcon.additionalText]: additionalText,
  });

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className={contentClasses}>
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </div>
      {additionalText && <span className={additionalTextClass}>{additionalText}</span>}
    </button>
  );
};

export default ButtonWithIcon;
