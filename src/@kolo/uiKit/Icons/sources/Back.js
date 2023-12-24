import React from 'react';
import PropTypes from 'prop-types';

export const Back = ({viewBox = '0 0 13 14', width = '13', height = '14', className}) => {
  return (
    <svg
      data-testid="icon-back"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M0 0H1440V883H0z"
          transform="translate(-526 -213)"
        />
        <path
          fill="#717886"
          d="M526 219.857l.007-.11.028-.134.025-.07.044-.096.06-.094.072-.086 6.015-6.016c.335-.335.877-.335 1.212 0 .307.307.333.788.077 1.124l-.077.088-4.535 4.536 8.93.001c.436 0 .797.327.85.75l.006.107c0 .437-.327.798-.75.85l-.107.007h-8.93l4.536 4.537c.307.307.333.788.077 1.124l-.077.088c-.307.307-.788.333-1.124.077l-.088-.077-6.02-6.021-.067-.081-.058-.09-.046-.1-.029-.084-.024-.12-.007-.11z"
          transform="translate(-526 -213)"
        />
      </g>
    </svg>
  );
};

Back.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
