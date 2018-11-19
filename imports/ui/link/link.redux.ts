import { action, ActionType } from 'typesafe-actions';
import { combineReducers, Dispatch } from 'redux';
import { createSelector } from 'reselect';

/**************************
 * constants, model, state
 **************************/
// constants
export const ADD = '[link] ADD';
export const DELETE = '[link] DELETE';
export const CHANGE = '[link] CHANGE';

// model
export type LinkModel = {
  _id?: string;
  title?: string;
  url?: string;
  visited?: boolean;
  createdAt?: any;
  updatedAt?: any;
};

// state
export type LinkState = {
  list: LinkModel[],
  linkFilter: string
};

/**************************
 * actions, action-type
 **************************/
export const addLink = ({title, url}) =>
  action(ADD, {
    title,
    url
  });

export const removeLink = (id: string) => 
  action(DELETE, id);

export const changeLink = (id: string) =>
  action(CHANGE, id);

export type LinkAction = ActionType<typeof addLink | typeof removeLink | typeof changeLink>;

/**************************
 * reducers
 **************************/
export const linkReducer = combineReducers<LinkState, LinkAction>({
  list: (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [...state, action.payload];
      case DELETE:
        return state.filter(item => item._id === action.payload);
      case CHANGE:
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
      case CHANGE:
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