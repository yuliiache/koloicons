import React from 'react';
import PropTypes from 'prop-types';

import {Image} from '../Image/Image';

import accept from './accept.png';

export const Accept = ({alt, width, height}) => (
  <Image
    src={accept}
    alt={alt}
    width={width}
    height={height}
  />
);

Accept.propTypes = {
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
