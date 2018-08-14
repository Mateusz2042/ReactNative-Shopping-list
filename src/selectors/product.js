import { some } from 'lodash';

export const check_repeating = (list, product) => some(list,
  e => e.name.toLowerCase() === product.trim().toLowerCase());
