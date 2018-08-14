import { some } from 'lodash';

export const check_repeating = (list, shop) => some(list,
  e => e.toLowerCase() === shop.trim().toLowerCase());
