import type {IconComponent} from '../types/icon';

export const Instagram: IconComponent = ({viewBox = '0 0 60 60', width = '20', height = '20', className}) => {
  return (
    <svg
      data-testid="icon-instagram"
      enableBackground="new 0 0 60 60"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="10"
      />
      <path d="m49 6h-38c-2.761 0-5 2.239-5 5v38c0 2.761 2.239 5 5 5h38c2.761 0 5-2.239 5-5v-38c0-2.761-2.239-5-5-5zm-19 39c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm16-28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
  );
};
