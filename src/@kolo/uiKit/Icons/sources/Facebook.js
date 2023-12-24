import React from 'react';
import PropTypes from 'prop-types';

export const Facebook = ({viewBox = '2 2 20 20', width = '24', height = '24', className}) => {
  return (
    <svg
      data-testid="icon-facebook"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M12.001,2.002 C6.479,2.002 2.002,6.479 2.002,12.001 C2.002,16.991 5.658,21.127 10.439,21.88 L10.439,14.892 L7.899,14.892 L7.899,12.001 L10.439,12.001 L10.439,9.798 C10.439,7.29 11.932,5.907 14.215,5.907 C15.309,5.907 16.455,6.102 16.455,6.102 L16.455,8.561 L15.191,8.561 C13.951,8.561 13.563,9.333 13.563,10.124 L13.563,11.999 L16.334,11.999 L15.891,14.89 L13.563,14.89 L13.563,21.878 C18.344,21.129 22,16.992 22,12.001 C22,6.479 17.523,2.002 12.001,2.002 Z" />
    </svg>
  );
};

Facebook.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
