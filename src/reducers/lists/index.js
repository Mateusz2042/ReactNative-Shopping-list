import { find } from 'lodash';
import {
  SAVE_NEW_LIST,
  REMOVE_LIST,
  UNSET_LOADER_LISTS,
  MARK_AS_DONE,
  MARK_AS_IN_PROGRESS,
  EDIT_LIST,
} from '../../constants/lists';
import { CLEAR_ALL } from '../../constants/clear';

const initialState = {
  lists: [],
  isLoading: false,
  listToEdit: {},
};

const actions = {
  [SAVE_NEW_LIST]: (state, { payload }) => {
    const data = {
      lists: state.lists.concat(payload),
    };

    return { ...data };
  },
  [REMOVE_LIST]: (state, { payload }) => {
    state.lists.splice(state.lists.indexOf(payload), 1);
    const data = {
      ...state,
      isLoading: true,
    };

    return { ...data };
  },
  [UNSET_LOADER_LISTS]: (state) => {
    const data = {
      ...state,
      isLoading: false,
    };

    return { ...data };
  },
  [MARK_AS_DONE]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
    };
    const x = find(state.lists, e => find(e.products, p => p === payload)).products;
    find(x, e => e === payload).done = true;

    return { ...data };
  },
  [MARK_AS_IN_PROGRESS]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
    };
    const x = find(state.lists, e => find(e.products, p => p === payload)).products;
    find(x, e => e === payload).done = false;


    return { ...data };
  },
  [EDIT_LIST]: (state, { payload: { id_editing, shop, products } }) => {
    const data = {
      ...state,
    };
    const listToEdit = find(state.lists, e => e.id === id_editing);
    listToEdit.shop = shop;
    listToEdit.products = products;

    return { ...data };
  },
  [CLEAR_ALL]: () => ({ ...initialState }),
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};
