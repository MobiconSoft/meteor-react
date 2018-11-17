import { handleActions } from 'redux-actions';
import { LinkModel } from './link.model';
import { ADD_LINK, DELETE_LINK } from './link.action';

export type LinksState = {
  readonly links: LinkModel[]
};

const linksReducer = handleActions({
  [ADD_LINK]: (state, action) => [...state, action.payload],
  [DELETE_LINK]: (state, action) => state.filter(item => item._id !== action.payload)
}, []);
export default linksReducer;



