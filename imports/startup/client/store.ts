import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { StateType } from 'typesafe-actions';
import { createBrowserHistory } from 'history';
import { connectRouter, RouterAction, LocationChangeAction } from 'connected-react-router';

import { linkEpic } from '../../client/pages/link/link.epic';
import { linkReducer, LinkAction } from '../../client/pages/link/link.reducer';

/***********************
 * root reducer
 ***********************/
export const browserHistory = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(browserHistory),
  links: linkReducer
});

/***********************
 * root state
 ***********************/
export type RootState = StateType<typeof rootReducer>;

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | LinkAction;

/***********************
 * root epic
 ***********************/
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (window as any) &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootEpic = combineEpics(linkEpic);
const epicMiddleware = createEpicMiddleware();

/***********************
 * root store
 ***********************/
function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  const store = createStore(rootReducer, enhancer);
  // run epic: https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
  epicMiddleware.run(rootEpic);
  return store;
}

const store = configureStore();
export default store;