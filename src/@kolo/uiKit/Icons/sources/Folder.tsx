import type {IconComponent} from '../types/icon';

export const Folder: IconComponent = ({viewBox, width = '24', height = '24', className}) => {
  return (
    <svg
      data-testid="icon-folder"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <g fillRule="evenodd">
        <path
          fill="#e9edf7"
          d="M22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,5 C2,3.8954305 2.8954305,3 4,3 L9,3 L11,6 L20,6 C21.1045695,6 22,6.8954305 22,8 L22,19 Z"
        />
        <path
          fill="#717886"
          d="M11.5351838,5 L20,5 C21.6568542,5 23,6.34314575 23,8 L23,19 C23,20.6568542 21.6568542,22 20,22 L4,22 C2.34314575,22 1,20.6568542 1,19 L1,5 C1,3.34314575 2.34314575,2 4,2 L9,2 C9.33435319,2 9.64658452,2.16710114 9.83205029,2.4452998 L11.5351838,5 Z M8.46481624,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,19 C3,19.5522847 3.44771525,20 4,20 L20,20 C20.5522847,20 21,19.5522847 21,19 L21,8 C21,7.44771525 20.5522847,7 20,7 L11,7 C10.6656468,7 10.3534155,6.83289886 10.1679497,6.5547002 L8.46481624,4 Z"
        />
      </g>
    </svg>
  );
};