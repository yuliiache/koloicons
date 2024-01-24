import type {IconComponent} from '../types/icon';

export const Down: IconComponent = ({viewBox = '0 0 16 16', width = '16', height = '16', className}) => {
  return (
    <svg
      data-testid="icon-down"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M2.29289322,5.29289322 C2.65337718,4.93240926 3.22060824,4.90467972 3.61289944,5.20970461 L3.70710678,5.29289322 L8,9.585 L12.2928932,5.29289322 C12.6533772,4.93240926 13.2206082,4.90467972 13.6128994,5.20970461 L13.7071068,5.29289322 C14.0675907,5.65337718 14.0953203,6.22060824 13.7902954,6.61289944 L13.7071068,6.70710678 L8,12.4142136 L2.29289322,6.70710678 C1.90236893,6.31658249 1.90236893,5.68341751 2.29289322,5.29289322 Z" />
    </svg>
  );
};
