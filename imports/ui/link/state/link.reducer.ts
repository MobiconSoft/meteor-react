import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './link.action';
import { LinkModel } from './link.model';
import { ADD_LINK, DELETE_LINK } from './link.action';

export type LinksState = {
  readonly links: LinkModel[]
};
export type LinksAction = ActionType<typeof actions>;

export default combineReducers<LinksState, LinksAction>({
  links: (state = [], action) => {
    switch (action.type) {
      case ADD_LINK:
        return [...state, action.payload];
      case DELETE_LINK:
        return state.filter(item => item._id !== action.payload)
      default:
        return state;
    }
  }
});



