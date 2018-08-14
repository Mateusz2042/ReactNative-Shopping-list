import {
  ADD_NEW_SHOP,
  REMOVE_SHOP,
  UNSET_LOADER,
} from '../../constants/shop';
import { CLEAR_ALL } from '../../constants/clear';

const initialState = {
  shop: '',
  list: [],
  isLoading: false,
};

const actions = {
  [ADD_NEW_SHOP]: (state, { payload }) => {
    const data = {
      list: state.list.concat(payload),
    };

    return { ...data };
  },
  [REMOVE_SHOP]: (state, { payload }) => {
    state.list.splice(state.list.indexOf(payload), 1);
    const data = {
      ...state,
      isLoading: true,
    };

    return { ...data };
  },
  [UNSET_LOADER]: (state) => {
    const data = {
      ...state,
      isLoading: false,
    };

    return { ...data };
  },
  [CLEAR_ALL]: () => ({ ...initialState }),
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};
