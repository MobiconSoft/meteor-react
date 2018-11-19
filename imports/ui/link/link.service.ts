import { Epic, combineEpics } from 'redux-observable';
import { filter, tap, ignoreElements } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import Links from '../../api/links';
import { insertCollection, removeCollection } from '../sdk';
import { ADD, LinkAction } from './link.redux';

class LinkService {
  addLink({title, url}) {
    return insertCollection(Links, { title, url, createAt: new Date() });
  }
  removeLink(_id: string) {
    return removeCollection(Links, _id);
  }
}

export const linkService = new LinkService();

const addEpic: Epic<LinkAction> = (
  action$,
  store
) =>
  action$.pipe(
    filter(isOfType(ADD)),
    tap(action => {
      console.log('store', store);
      const { title, url } = action.payload;
      insertCollection(Links, { title, url, createAt: new Date() });
    }),
    ignoreElements()
  );

export const addLinkEpic =  combineEpics(addEpic);