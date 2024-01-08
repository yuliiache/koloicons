import React from 'react';
import {Link as InternalLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Button} from '../Button/Button';
import {BUTTON_COLOR, BUTTON_SIZE, BUTTON_TYPE} from '../Button/constants';

import {BUTTONLINK_TEST_ID} from './constants';

export const ButtonLink = ({
  color = BUTTON_COLOR.PRIMARY,
  size = BUTTON_SIZE.SMALL,
  text,
  isDisabled,
  type = BUTTON_TYPE.BUTTON,
  url,
}) => {
  const isInternalUrl = url.startsWith('/');

  if (isInternalUrl) {
    return (
      <InternalLink
        to={url}
        data-testid={BUTTONLINK_TEST_ID}
      >
        <Button
          color={color}
          size={size}
          text={text}
          disabled={isDisabled}
          type={type}
        />
      </InternalLink>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      data-testid={BUTTONLINK_TEST_ID}
    >
      <Button
        color={color}
        size={size}
        text={text}
        disabled={isDisabled}
        type={type}
      />
    </a>
  );
};

ButtonLink.propTypes = {
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  color: PropTypes.oneOf(Object.values(BUTTON_COLOR)),
  text: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  url: PropTypes.string.isRequired,
};
