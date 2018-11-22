import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
 
import App from '../imports/ui/App'
import Login from '../imports/ui/pages/Login';
import Signup from '../imports/ui/pages/Signup';
import InfoContainer from '../imports/ui/Info';
import NotFound from '../imports/ui/pages/NotFound';
import store from '../imports/ui/store';

const browserHistory = createBrowserHistory();
const Root = (
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

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.user();
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
});

Meteor.startup(() => {
  render(Root, document.getElementById('react-target'));
});
