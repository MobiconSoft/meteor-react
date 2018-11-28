import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', () => Links.find());
  Links.allow({
    insert (userId: string, doc: any) {
      console.log('insert doc:', doc);
      return (userId && doc.owner === userId);
    },
    remove(userId: string, doc: any) {
      console.log('remove doc:', doc);
      return (userId && doc.owner === userId);
    }
  });

  const linkSchema = new SimpleSchema({
    title: {
      type: String,
      min: 3
    },
    url: {
      type: String
    },
    owner: {
      type: String
    },
    createdAt: {
      type: Date 
    }
  });

  Meteor.methods({
    insertLink(params: any) {
      if (!this.userId) {
        throw new Meteor.Error('Please login');
      }
      try {
        linkSchema.validate(params);
        return Links.insert(params);
      } catch(e) {
        throw new Meteor.Error('no valid schema');
      }
    },
    removeLink(_id: string) {
      if (!this.userId) {
        throw new Meteor.Error('Please login');
      }
      return Links.remove(_id);
    }
  });
}
export default Links;
