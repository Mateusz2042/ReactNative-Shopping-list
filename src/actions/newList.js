import * as types from '../constants/newList';

export const setListShopRegularField = field => (
  { type: types.SET_LIST_SHOP_REGULAR_FIELD, payload: field }
);

export const addNewProduct = shop => (
  { type: types.ADD_NEW_PRODUCT, payload: shop }
);

export const removeProduct = shop => (
  { type: types.REMOVE_PRODUCT, payload: shop }
);

export const unsetNewListLoader = () => (
  { type: types.UNSET_NEW_LIST_LOADER }
);

export const plusQuantity = counter => (
  { type: types.PLUS_QUANTITY, payload: counter }
);

export const minusQuantity = counter => (
  { type: types.MINUS_QUANTITY, payload: counter }
);

export const clearNewList = counter => (
  { type: types.CLEAR_NEW_LIST, payload: counter }
);

export const setError = () => (
  { type: types.SER_ERROR }
);

export const hideError = () => (
  { type: types.HIDE_ERROR }
);
