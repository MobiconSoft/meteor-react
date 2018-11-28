import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App'
import Login from './pages/Login';
import Signup from './pages/Signup';
import InfoContainer from './Info';
import NotFound from './pages/NotFound';
import store from './store';

const browserHistory = createBrowserHistory();
export const Root = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={InfoContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export const authenticated = (isAuthenticated) => {
  if (isAuthenticated) {
    const pathname = browserHistory.location.pathname;
    const unauthenticatedPages: any = ['/', '/signup'];
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    if (isUnauthenticatedPage) {
      browserHistory.push('/links'); // main
    } else {
      browserHistory.push(pathname);
    }
  } else {
    browserHistory.push('/'); // login
  }
}