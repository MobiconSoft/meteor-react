import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', () => Links.find());
}

export default Links;
