import classnames from 'classnames';
import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

import styles from './Button.module.scss';
import {
  BUTTON_TEST_ID,
  BUTTON_TEXT_TEST_ID,
  ButtonColor,
  ButtonContentPlacement,
  ButtonSize,
  ButtonType,
} from './constants';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;
  placement?: ButtonContentPlacement;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  children,
  isDisabled = false,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.SMALL,
  type = ButtonType.BUTTON,
  placement = ButtonContentPlacement.CENTER,

  ...rest
}) => {
  const buttonClasses = classnames(
    styles.button,
    styles[`button-${size}`],
    styles[`button-${color}`],
    styles[`button-${placement}`],
    {
      [styles['button-disabled']]: isDisabled,
      [styles['button-children']]: children,
    }
  );

  return (
    <button
      data-testid={BUTTON_TEST_ID}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
    >
      <span data-testid={BUTTON_TEXT_TEST_ID}>{text}</span>
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
