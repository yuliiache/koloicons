import {Icon} from './Icon';

export interface Pack {
  name: string;
  number: number;
  id: string;
  isFree: boolean;
  icons: Icon[];
  isFreeMonthSet: boolean;
}
