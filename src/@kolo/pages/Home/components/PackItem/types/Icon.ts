import {IconSize, IconStyle} from '@kolo/constants/constants';

export interface Icon {
  id: string;
  name: string;
  style: IconStyle.LINE | IconStyle.SOLID;
  size: IconSize.DETAILED | IconSize.SIMPLE;
}
