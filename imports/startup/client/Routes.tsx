import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from '../../client/App'
import Login from './Login';
import Signup from './Signup';
import InfoContainer from '../../client/Info';
import NotFound from './NotFound';
import store, { browserHistory } from './store';

export const Root = (
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={InfoContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
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