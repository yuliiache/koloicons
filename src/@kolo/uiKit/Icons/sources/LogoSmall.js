import React from 'react';
import PropTypes from 'prop-types';

export const LogoSmall = ({viewBox = '0 0 24 24', width = '24', height = '24', className}) => {
  return (
    <svg
      data-testid="icon-logo-sm"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <image
        width="24"
        height="24"
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
};

LogoSmall.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
