import { createAction } from 'redux-actions';

export const ADD_LINK = '[link] ADD_LINK';
export const DELETE_LINK = '[link] DELETE_LINK';

export const linksActions = {
  add: createAction(ADD_LINK),
  delete: createAction(DELETE_LINK)
} 
