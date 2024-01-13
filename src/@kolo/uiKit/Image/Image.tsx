import {FC} from 'react';

interface Props {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const Image: FC<Props> = ({src, width, height, alt = ''}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
