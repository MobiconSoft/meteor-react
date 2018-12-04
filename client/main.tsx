import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { Root, authenticated } from '../imports/startup/client/Routes';

// eui
import '@elastic/eui/dist/eui_theme_light.css';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.user();
  authenticated(isAuthenticated);
});

Meteor.startup(() => {
  render(Root, document.getElementById('react-target'));
});
