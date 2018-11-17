import { createAction } from 'redux-actions';

export const ADD_LINK = '[link] ADD_LINK';
export const DELETE_LINK = '[link] DELETE_LINK';

export const addLink = createAction(ADD_LINK);
export const deleteLink = createAction(DELETE_LINK);
