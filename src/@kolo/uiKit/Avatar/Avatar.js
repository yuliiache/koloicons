import React from 'react';
import PropTypes from 'prop-types';

import {Image} from '../Image/Image';

import avatar from './avatar.png';
import {AVATAR_SIZES} from './constants';

export const Avatar = ({alt, width = AVATAR_SIZES.WIDTH, height = AVATAR_SIZES.HEIGHT}) => (
  <Image
    src={avatar}
    alt={alt}
    width={width}
    height={height}
  />
);

Avatar.propTypes = {
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
