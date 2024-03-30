import {IconStyle} from '@kolo/constants/constants';

export interface Category {
  name: string;
  number: number;
  id: string;
}

export interface Icon {
  name: string;
  category: Category;
  size: string;
  style: string;
  types: string[];
  id: string;
  tags?: string[];
}
export interface Params {
  iconId: string;
  withTags: string;
  iconStyle: IconStyle;
}
