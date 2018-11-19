import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import { linkReducer, LinkAction } from './link/link.redux';
import { StateType } from 'typesafe-actions'; 
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import thunk from 'redux-thunk';
import { addLinkEpic } from './link/link.service';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

/***********************
 * root reducer
 ***********************/
const rootReducer = combineReducers({
  router: routerReducer,
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
    (<any>window) &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootEpic = combineEpics(addLinkEpic);
const epicMiddleware = createEpicMiddleware();

/***********************
 * root store
 ***********************/
function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = [thunk, epicMiddleware];
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