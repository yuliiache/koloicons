import {FC} from 'react';

export interface IconProps {
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
}

export type IconComponent = FC<IconProps>;
