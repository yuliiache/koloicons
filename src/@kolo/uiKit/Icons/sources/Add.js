import React from 'react';
import PropTypes from 'prop-types';

export const Add = ({viewBox = '0 0 16 16', width = '16', height = '16', className}) => {
  return (
    <svg
      data-testid="icon-add"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M8,2 C8.55228475,2 9,2.44771525 9,3 L9,3 L9,7 L13,7 C13.5128358,7 13.9355072,7.38604019 13.9932723,7.88337887 L14,8 C14,8.55228475 13.5522847,9 13,9 L13,9 L9,9 L9,13 C9,13.5128358 8.61395981,13.9355072 8.11662113,13.9932723 L8,14 C7.44771525,14 7,13.5522847 7,13 L7,13 L7,9 L3,9 C2.48716416,9 2.06449284,8.61395981 2.00672773,8.11662113 L2,8 C2,7.44771525 2.44771525,7 3,7 L3,7 L7,7 L7,3 C7,2.48716416 7.38604019,2.06449284 7.88337887,2.00672773 Z" />
    </svg>
  );
};

Add.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
