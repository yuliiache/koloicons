import type {IconComponent} from '../types/icon';

export const Arrow: IconComponent = ({viewBox = '0 0 27 9', width = '27', height = '9', className}) => {
  return (
    <svg
      data-testid="icon-arrow"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path
        fill="#919EAB"
        d="M9.16981132,0 L0,4.5 L9.16981132,9 L9.16981132,5 L10.6981132,5 L10.6981132,4 L9.16981132,4 L9.16981132,0 Z M12.7358491,4 L12.7358491,5 L14.7735849,5 L14.7735849,4 L12.7358491,4 Z M16.8113208,4 L16.8113208,5 L18.8490566,5 L18.8490566,4 L16.8113208,4 Z M20.8867925,4 L20.8867925,5 L22.9245283,5 L22.9245283,4 L20.8867925,4 Z M24.9622642,4 L24.9622642,5 L27,5 L27,4 L24.9622642,4 Z"
      />
    </svg>
  );
};
