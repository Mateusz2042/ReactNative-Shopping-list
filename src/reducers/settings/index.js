import { SET_LANGUAGE } from '../../constants/settings';

const initialState = {
  language: '',
};

const actions = {
  [SET_LANGUAGE]: (state, { payload }) => {
    const data = {
      ...state,
      language: payload,
    };

    return { ...data };
  },
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};
