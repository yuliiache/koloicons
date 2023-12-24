import {MONTHS} from './constants';

export const getCurrentMonth = () => {
  const now = new Date();
  return MONTHS[now.getMonth()];
};
