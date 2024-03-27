import {IconSize} from './constants';

export interface IconSizeInfo {
  id: string;
  size: IconSize;
  requirePro: boolean;
}
export const IconSizeData: IconSizeInfo[] = [
  {
    id: 'icon_size_24px',
    size: IconSize.PX24,
    requirePro: false,
  },
  {
    id: 'icon_size_30px',
    size: IconSize.PX30,
    requirePro: false,
  },
  {
    id: 'icon_size_48px',
    size: IconSize.PX48,
    requirePro: false,
  },
  {
    id: 'icon_size_60px',
    size: IconSize.PX60,
    requirePro: false,
  },
  {
    id: 'icon_size_96px',
    size: IconSize.PX96,
    requirePro: false,
  },
  {
    id: 'icon_size_120px',
    size: IconSize.PX120,
    requirePro: true,
  },
  {
    id: 'icon_size_144px',
    size: IconSize.PX144,
    requirePro: true,
  },
  {
    id: 'icon_size_150px',
    size: IconSize.PX150,
    requirePro: true,
  },
  {
    id: 'icon_size_254px',
    size: IconSize.PX254,
    requirePro: true,
  },
];
