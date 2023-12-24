import React from 'react';
import PropTypes from 'prop-types';

export const Menu = ({viewBox = '0 0 16 16', width = '16', height = '16', className}) => {
  return (
    <svg
      data-testid="icon-menu"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M15,13 C15.5522847,13 16,13.4477153 16,14 C16,14.5128358 15.6139598,14.9355072 15.1166211,14.9932723 L15,15 L1,15 C0.44771525,15 0,14.5522847 0,14 C0,13.4871642 0.38604019,13.0644928 0.883378875,13.0067277 L1,13 L15,13 Z M11,7 C11.5522847,7 12,7.44771525 12,8 C12,8.51283584 11.6139598,8.93550716 11.1166211,8.99327227 L11,9 L1,9 C0.44771525,9 0,8.55228475 0,8 C0,7.48716416 0.38604019,7.06449284 0.883378875,7.00672773 L1,7 L11,7 Z M15,1 C15.5522847,1 16,1.44771525 16,2 C16,2.51283584 15.6139598,2.93550716 15.1166211,2.99327227 L15,3 L1,3 C0.44771525,3 0,2.55228475 0,2 C0,1.48716416 0.38604019,1.06449284 0.883378875,1.00672773 L1,1 L15,1 Z" />
    </svg>
  );
};

Menu.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
