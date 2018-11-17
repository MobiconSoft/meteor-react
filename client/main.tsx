import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../imports/ui/App'
import store from '../imports/ui/store';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

Meteor.startup(() => {
  render(Root, document.getElementById('react-target'));
});
