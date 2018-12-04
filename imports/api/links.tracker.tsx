
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data'; 
import Links from './links';

export const withLink = (mapProps: any, Component: any) => {
  return compose(
    withTracker(() => {
      const connection = Meteor.subscribe('links', { userId: Meteor.userId() });
      return {
        links: Links.find().fetch(),
        loading: !connection.ready()
      };
    }),
    connect(mapProps)
  )(Component);
}