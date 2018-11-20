import { action } from 'typesafe-actions';

/**************************
 * constants, model
 **************************/
// constants
export const LOAD_REQUEST = '[link] LOAD_REQUEST';
export const LOAD_SUCCESS = '[link] LOAD_SUCCESS';
export const ADD_REQUEST = '[link] ADD_REQUEST';
export const ADD_SUCCESS = '[link] ADD_SUCCESS';
export const ADD_FAILED = '[link] ADD_FAILED';
export const DELETE_REQUEST = '[link] DELETE_REQUEST';
export const DELETE_SUCCESS = '[link] DELETE_SUCCESS';
export const DELETE_FAILED = '[link] DELETE_FAILED';
export const CHANGE = '[link] CHANGE';

// model
export type LinkModel = {
  _id?: string;
  title?: string;
  url?: string;
  visited?: boolean;
  error?: boolean;
  errorMsg?: any;
  success?: boolean;
  createdAt?: any;
  updatedAt?: any;
};

/**************************
 * actions, action-type
 **************************/
export const loadLink = (params: any) => action(LOAD_REQUEST, params);
export const loadLinkSuccess = (params: LinkModel[]) => action(LOAD_SUCCESS, params);
export const addLink = (params: LinkModel) => action(ADD_REQUEST, params);
export const addLinkSuccess = (params: LinkModel) => action(ADD_SUCCESS, params);
export const addLinkFailed = (params: LinkModel) => action(ADD_FAILED, params);
export const removeLink = (id: string) => action(DELETE_REQUEST, id);
export const removeLinkSuccess = (id: string) => action(DELETE_SUCCESS, id);
export const removeLinkFailed = (id: string) => action(DELETE_FAILED, id);
export const changeLink = (id: string) => action(CHANGE, id);

