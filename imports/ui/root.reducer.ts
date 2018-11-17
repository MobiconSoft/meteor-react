import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { linksReducer } from './link/state';

const rootReducer = combineReducers({
  router: routerReducer,
  links: linksReducer
});
export default rootReducer;