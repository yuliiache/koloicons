import type {IconComponent} from '../types/icon';

export const Up: IconComponent = ({viewBox = '0 0 16 16', width = '16', height = '16', className}) => {
  return (
    <svg
      data-testid="icon-up"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M13.7071 10.7071C13.3466 11.0676 12.7794 11.0953 12.3871 10.7903L12.2929 10.7071L8 6.415L3.70711 10.7071C3.34662 11.0676 2.77939 11.0953 2.3871 10.7903L2.29289 10.7071C1.93241 10.3466 1.90468 9.77939 2.2097 9.3871L2.29289 9.29289L8 3.58579L13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071Z" />
    </svg>
  );
};
