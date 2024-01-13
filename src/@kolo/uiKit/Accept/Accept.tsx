import {FC} from 'react';

import {Image} from '../Image/Image';
import accept from './accept.png';

interface Props {
  alt?: string;
  width?: number;
  height?: number;
}

export const Accept: FC<Props> = ({alt, width, height}) => (
  <Image
    src={accept}
    alt={alt}
    width={width}
    height={height}
  />
);
