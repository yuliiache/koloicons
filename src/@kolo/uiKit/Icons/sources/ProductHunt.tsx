import type {IconComponent} from '../types/icon';

export const ProductHunt: IconComponent = ({viewBox = '2 2 20 20', width = '24', height = '24', className}) => {
  return (
    <svg
      data-testid="icon-product"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M12,2 C17.523,2 22,6.477 22,12 C22,17.523 17.523,22 12,22 C6.477,22 2,17.523 2,12 C2,6.477 6.477,2 12,2 Z M13.338,7 L8.501,7 L8.501,17 L10.499,17 L10.499,14 L13.337,14 C15.271,14 16.837,12.434 16.837,10.499 C16.837,8.566 15.271,7 13.338,7 L13.338,7 Z M13.337,9 C14.167,9 14.838,9.672 14.838,10.499 C14.838,11.328 14.166,12 13.337,12 L13.337,12 L10.499,12 L10.499,9 Z" />
    </svg>
  );
};
