import * as types from '../constants/lists';

export const saveNewList = newList => (
  { type: types.SAVE_NEW_LIST, payload: newList }
);

export const removeList = list => (
  { type: types.REMOVE_LIST, payload: list }
);

export const unsetLoaderLists = () => (
  { type: types.UNSET_LOADER_LISTS }
);

export const markAsDone = item => (
  { type: types.MARK_AS_DONE, payload: item }
);

export const markAsInProgress = item => (
  { type: types.MARK_AS_IN_PROGRESS, payload: item }
);

export const editList = field => (
  { type: types.EDIT_LIST, payload: field }
);
