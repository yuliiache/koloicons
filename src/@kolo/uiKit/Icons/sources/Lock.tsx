import type {IconComponent} from '../types/icon';

export const Lock: IconComponent = ({viewBox, width = 20, height = 20, className}) => {
  return (
    <svg
      data-testid="icon-lock"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M11.5714286,6.5 C12.3604071,6.5 13,7.1715725 13,8 L13,12.5 C13,13.3284275 12.3604071,14 11.5714286,14 L4.42857143,14 C3.63959286,14 3,13.3284275 3,12.5 L3,8 C3,7.1715725 3.63959286,6.5 4.42857143,6.5 L4.42857143,5.75 C4.42857143,3.678935 6.02755714,2 8,2 C9.97244286,2 11.5714286,3.678935 11.5714286,5.75 L11.5714286,6.5 Z M8,3.5 C6.81653286,3.5 5.85714286,4.5073595 5.85714286,5.75 L5.85714286,6.5 L10.1428571,6.5 L10.1428571,5.75 C10.1428571,4.5073595 9.18346714,3.5 8,3.5 Z" />
    </svg>
  );
};
