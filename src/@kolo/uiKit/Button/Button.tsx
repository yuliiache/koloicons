import classnames from 'classnames';
import {FC} from 'react';

import styles from './Button.module.scss';
import {BUTTON_TEST_ID, BUTTON_TEXT_TEST_ID, ButtonColor, ButtonSize, ButtonType} from './constants';

export interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  isDisabled = false,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.SMALL,
  type = ButtonType.BUTTON,
}) => {
  const buttonClasses = classnames(styles.button, styles[`button-${size}`], styles[`button-${color}`], {
    [styles['button-disabled']]: isDisabled,
  });

  return (
    <button
      data-testid={BUTTON_TEST_ID}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span data-testid={BUTTON_TEXT_TEST_ID}>{text}</span>
    </button>
  );
};

export default Button;
