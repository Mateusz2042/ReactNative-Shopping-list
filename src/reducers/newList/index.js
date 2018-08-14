import { find } from 'lodash';

import {
  SET_LIST_SHOP_REGULAR_FIELD,
  ADD_NEW_PRODUCT,
  REMOVE_PRODUCT,
  UNSET_NEW_LIST_LOADER,
  PLUS_QUANTITY,
  MINUS_QUANTITY,
  CLEAR_NEW_LIST,
  SER_ERROR,
  HIDE_ERROR,
} from '../../constants/newList';
import { CLEAR_ALL } from '../../constants/clear';

const initialState = {
  listShop: '',
  isLoading: false,
  productsList: [],
  product: {},
  showError: false,
  id_editing: false,
};

const actions = {
  [SET_LIST_SHOP_REGULAR_FIELD]: (state, { payload: { property, value } }) => {
    const data = {
      ...state,
      [property]: value,
    };

    return { ...data };
  },
  [ADD_NEW_PRODUCT]: (state, { payload }) => {
    const data = {
      productList: state.productList.concat(payload),
    };

    return { ...data };
  },
  [REMOVE_PRODUCT]: (state, { payload }) => {
    state.productList.splice(state.productList.indexOf(payload), 1);
    const data = {
      ...state,
      isLoading: true,
    };

    return { ...data };
  },
  [UNSET_NEW_LIST_LOADER]: (state) => {
    const data = {
      ...state,
      isLoading: false,
    };

    return { ...data };
  },
  [ADD_NEW_PRODUCT]: (state, { payload }) => {
    const data = {
      ...state,
      productsList: state.productsList.concat(payload),
    };

    return { ...data };
  },
  [REMOVE_PRODUCT]: (state, { payload }) => {
    state.productsList.splice(state.productsList.indexOf(payload), 1);
    const data = {
      ...state,
      isLoading: true,
    };

    return { ...data };
  },
  [PLUS_QUANTITY]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
    };
    find(state.productsList, e => e.name === payload.name).quantity += 1;

    return { ...data };
  },
  [MINUS_QUANTITY]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
    };
    find(state.productsList, e => e.name === payload.name).quantity -= 1;

    return { ...data };
  },
  [SER_ERROR]: (state) => {
    const data = {
      ...state,
      showError: true,
    };

    return { ...data };
  },
  [HIDE_ERROR]: (state) => {
    const data = {
      ...state,
      showError: false,
    };

    return { ...data };
  },
  [CLEAR_NEW_LIST]: () => ({ ...initialState }),
  [CLEAR_ALL]: () => ({ ...initialState }),
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};
