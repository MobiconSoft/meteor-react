import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../imports/ui/App'
// import store from './state';

// const Root = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
