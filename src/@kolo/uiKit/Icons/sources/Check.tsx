import type {IconComponent} from '../types/icon';

export const Check: IconComponent = ({viewBox = '0 0 16 16', width = '16', height = '16', className}) => {
  return (
    <svg
      data-testid="icon-check"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <defs>
        <path
          id="check-a"
          d="M10.038536,5.42926334 C10.3925921,4.96204264 11.0717777,4.86049067 11.5555394,5.20244068 C12.0393012,5.54439068 12.1444484,6.20035316 11.7903923,6.66757386 L8.43118844,11.1004579 C8.09762659,11.5406339 7.47038811,11.6270618 7.03021208,11.2935 C6.99812928,11.2691879 6.96754374,11.2429608 6.93862241,11.2149618 L4.31701237,8.67696301 L4.31701237,8.67696301 C3.89361744,8.26707145 3.89443463,7.60329517 4.31883761,7.1943772 C4.7432406,6.78545923 5.4305166,6.78624848 5.85391152,7.19614004 L7.49538634,8.78526317 L10.038536,5.42926334 Z"
        />
      </defs>
      <use xlinkHref="#check-a" />
    </svg>
  );
};
