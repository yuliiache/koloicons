import React from 'react';
import PropTypes from 'prop-types';

export const GithubColor = ({viewBox = '0 0 24 24', width = '24', height = '24', className}) => {
  return (
    <svg
      data-testid="icon-git-clr"
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
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          fill="#333"
          fillRule="nonzero"
          d="M11.9999985,2 C6.475,2 1.99999853,6.475 1.99999853,12 L1.99999853,12.0005207 C1.99789786,16.3059307 4.75331973,20.1287707 8.83848973,21.4881607 C9.33848973,21.5751607 9.52548973,21.2751607 9.52548973,21.0121607 C9.52548973,20.7751607 9.51248973,19.9881607 9.51248973,19.1501607 C7.00048973,19.6131607 6.35048973,18.5381607 6.15048973,17.9751607 C6.03748973,17.6871607 5.55048973,16.8001607 5.12548973,16.5621607 C4.77548973,16.3751607 4.27548973,15.9121607 5.11248973,15.9001607 C5.90048973,15.8871607 6.46248973,16.6251607 6.65048973,16.9251607 C7.55048973,18.4371607 8.98848973,18.0121607 9.56248973,17.7501607 C9.65048973,17.1001607 9.91248973,16.6631607 10.2004897,16.4131607 C7.97548973,16.1631607 5.65048973,15.3001607 5.65048973,11.4751607 C5.65048973,10.3871607 6.03748973,9.48816065 6.67548973,8.78716065 C6.57548973,8.53716065 6.22548973,7.51216065 6.77548973,6.13716065 C6.77548973,6.13716065 7.61248973,5.87516065 9.52548973,7.16316065 L9.52548939,7.16316074 C10.3395524,6.93722174 11.1806594,6.82350374 12.0254894,6.82516074 C12.8754894,6.82516074 13.7254894,6.93716074 14.5254894,7.16216074 C16.4374894,5.86216074 17.2754894,6.13816074 17.2754894,6.13816074 C17.8254894,7.51316074 17.4754894,8.53816074 17.3754894,8.78816074 C18.0124894,9.48816074 18.4004894,10.3751607 18.4004894,11.4751607 C18.4004894,15.3131607 16.0634894,16.1631607 13.8384894,16.4131607 C14.2004894,16.7251607 14.5134894,17.3251607 14.5134894,18.2631607 C14.5134894,19.6001607 14.5004894,20.6751607 14.5004894,21.0131607 C14.5004894,21.2751607 14.6884894,21.5871607 15.1884894,21.4871607 L15.1884889,21.4871609 C19.2585889,20.1127409 21.9989789,16.2958909 21.9999985,12 C21.9999985,6.47500091 17.5249989,2 11.9999985,2 L11.9999985,2 Z"
        />
      </g>
    </svg>
  );
};

GithubColor.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
