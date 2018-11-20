
import { Epic, combineEpics } from 'redux-observable';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import Links from '../../api/links';
import { insertCollection, removeCollection, loadCollection, RequestModel } from '../sdk';
import * as actions from './link.action';

const loadLinks: Epic = (
  action$,
  store
) =>
  action$.pipe(
    filter(isOfType(actions.LOAD_REQUEST)),
    map(action => {
      return actions.loadLinkSuccess(action.payload);
    }),
    // takeUntil(action$.pipe(
    //   filter(isOfType(actions.ADD_REQUEST))
    // ))
  );

const addLink: Epic = (
  action$,
  store
) =>
  action$.pipe(
    filter(isOfType(actions.ADD_REQUEST)),
    switchMap(action => {
      const { title, url } = action.payload;
      return insertCollection(Links, { title, url, createdAt: new Date() })
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
      const { _id } = action.payload;
      return removeCollection(Links, _id);
    }),
    map((response: RequestModel) => {
      if (response.error) {
        return actions.removeLinkFailed({ ...response.result, ...response.params })
      }
      return actions.removeLinkSuccess(response.result)
    }),
    // takeUntil(action$.pipe(
    //   filter(isOfType(actions.ADD_REQUEST))
    // ))
  );

export const linkEpic = combineEpics(loadLinks, addLink, removeLink);