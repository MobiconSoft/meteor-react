import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';

function configureStore(initialState?: object) {
  return createStore(rootReducer, initialState!);
}

const store = configureStore();
export default store;