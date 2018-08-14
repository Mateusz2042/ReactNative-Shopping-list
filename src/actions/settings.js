import * as types from '../constants/settings';

export const setLanguage = language => (
  { type: types.SET_LANGUAGE, payload: language }
);
