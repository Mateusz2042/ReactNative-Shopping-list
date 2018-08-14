import * as types from '../constants/shop';

export const addNewShop = shop => (
  { type: types.ADD_NEW_SHOP, payload: shop }
);

export const removeShop = shop => (
  { type: types.REMOVE_SHOP, payload: shop }
);

export const unsetLoader = () => (
  { type: types.UNSET_LOADER }
);
