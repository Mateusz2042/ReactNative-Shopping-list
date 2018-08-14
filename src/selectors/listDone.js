import { sumBy } from 'lodash';

export function doneList(products) {
  if (sumBy(products, e => e.done === true) === products.length) {
    return true;
  }
  return false;
}
