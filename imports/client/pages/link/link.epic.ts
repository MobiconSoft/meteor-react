
import { Epic, combineEpics } from 'redux-observable';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { Meteor } from 'meteor/meteor';

import Links from '../../../api/links';
import { insertCollection, removeCollection, RequestModel, removeCall, insertCall } from '../../sdk';
import * as actions from './link.action';

const addLink: Epic = (
  action$,
  store
) =>
  action$.pipe(
    filter(isOfType(actions.ADD_REQUEST)),
    switchMap(action => {
      const { title, url } = action.payload;
      const owner = Meteor.userId();
      return insertCall('insertLink', { title, url, owner, createdAt: new Date() })
      // return insertCollection(Links, { title, url, owner, createdAt: new Date() })
    }),
    map((response: RequestModel) => {
      if (response.error) {
        return actions.addLinkFailed({ ...response.result })
      }
      return actions.addLinkSuccess(response.result)
    }),
    // takeUntil(action$.pipe(
    //   filter(isOfType(actions.ADD_REQUEST))
    // ))
  );

const removeLink: Epic = (
  action$,
  store
) =>
  action$.pipe(
    filter(isOfType(actions.DELETE_REQUEST)),
    switchMap(action => {
      return removeCall('removeLink', action.payload);
      // return removeCollection(Links, action.payload);
    }),
    map((response: RequestModel) => {
      if (response.error) {
        return actions.removeLinkFailed({ ...response.result, ...response.params })
      }
      return actions.removeLinkSuccess(response.params._id);
    }),
    // takeUntil(action$.pipe(
    //   filter(isOfType(actions.ADD_REQUEST))
    // ))
  );

export const linkEpic = combineEpics(addLink, removeLink);