import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {BUTTON_SOCIAL_TEST_ID, BUTTON_SOCIAL_TEXT_TEST_ID} from './constants';

import styles from './ButtonSocial.module.scss';

export const ButtonSocial = ({text, shouldShowStatus, isConnected, renderIcon, onClick}) => {
  const isDisconnected = shouldShowStatus && !isConnected;

  const buttonClasses = classNames(styles.buttonSocial, {
    [styles.buttonSocialDisconnected]: isDisconnected,
  });

  let buttonText = text;

  if (shouldShowStatus) {
    buttonText = isConnected ? `Connect ${text}` : `Disconnect ${text}`;
  }

  return (
    <button
      data-testid={BUTTON_SOCIAL_TEST_ID}
      className={classNames(buttonClasses)}
      type="button"
      onClick={onClick}
    >
      <span
        className={styles.buttonSocialText}
        data-testid={BUTTON_SOCIAL_TEXT_TEST_ID}
      >
        {buttonText}
      </span>
      <i className={styles.buttonSocialIcon}>{renderIcon && renderIcon()}</i>
    </button>
  );
};

ButtonSocial.propTypes = {
  text: PropTypes.string,
  shouldShowStatus: PropTypes.bool,
  isConnected: PropTypes.bool,
  renderIcon: PropTypes.func,
  onClick: PropTypes.func,
};
