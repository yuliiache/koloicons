import React from 'react';
import PropTypes from 'prop-types';

export const Image = ({alt, src, width, height}) => {
  return (
    <img
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
