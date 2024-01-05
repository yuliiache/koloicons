import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TEST_ID, BUTTON_TEXT_TEST_ID, BUTTON_TYPE} from './constants';

import styles from './Button.module.scss';

export const Button = ({
  color = BUTTON_COLOR.PRIMARY,
  size = BUTTON_SIZE.SMALL,
  text,
  isDisabled,
  onClick,
  type = BUTTON_TYPE.BUTTON,
}) => {
  const buttonClasses = classNames(styles.button, styles[`button-${size}`], styles[`button-${color}`], {
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

Button.propTypes = {
  size: PropTypes.oneOf(BUTTON_SIZE),
  color: PropTypes.oneOf(BUTTON_COLOR),
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(BUTTON_TYPE),
};
