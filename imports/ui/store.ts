import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import { LinksState } from './link/state';
export interface RootState {
  router: any;
  links: LinksState
}
const rootState: RootState = {
  router: undefined,
  links: undefined
}

function configureStore(initialState?: object) {
  return createStore(rootReducer, initialState!);
}

const store = configureStore(rootState);
export default store;