import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import * as actions from './link.action';

/**************************
 * state
 **************************/
// state
export type LinkState = {
  list: actions.LinkModel[],
  linkFilter: string
};

/**************************
 * reducers
 **************************/
export type LinkAction = ActionType<typeof actions>;
export const linkReducer = combineReducers<LinkState, LinkAction>({
  list: (state = [], action) => {
    switch (action.type) {
      case actions.ADD_FAILED:
        return state;
      case actions.ADD_SUCCESS:
        return [...state, action.payload];
      case actions.DELETE_FAILED:
        return state;
      case actions.DELETE_SUCCESS:
        return state.filter(item => item._id === action.payload);
      case actions.CHANGE:
        return state.map(
          item =>
            item._id === action.payload
              ? { ...item, visited: !item.visited }
              : item
        );
      default:
        return state;
    }
  },
  linkFilter: (state = '', action) => {
    switch (action.type) {
      case actions.CHANGE:
        if (action.payload === 'visited'){
          return '';
        } else {
          return 'visited';
        }
      default:
        return state;
    }
  }
})

/**************************
 * selectors
 **************************/
export const getLinks = (state: LinkState) => state.list;
export const getLinkFilter = (state: LinkState) => state.linkFilter;
export const getFilteredLinks = createSelector(getLinks, getLinkFilter, (links, linkFilter) => {
  switch (linkFilter) {
    case 'visited':
      return links.filter(t => t.visited);
    default:
      return links;
  }
});