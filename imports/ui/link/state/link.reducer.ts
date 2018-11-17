import { handleActions } from 'redux-actions';
import { LinkModel } from './link.model';
import { ADD_LINK, DELETE_LINK } from './link.action';

export type LinksState = {
  links: LinkModel[];
};
const initialState: LinksState = {
  links: []
};
const linksReducer = handleActions({
  [ADD_LINK]: (state, action) => ({ links: state.links.push(action.payload) }),
  [DELETE_LINK]: (state, action) => ({ links: state.links.filter(item => item._id !== action.payload) })
}, initialState);
export default linksReducer;



