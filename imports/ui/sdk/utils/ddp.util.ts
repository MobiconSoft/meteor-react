
import { from, Observable } from 'rxjs';
import { Meteor } from 'meteor/meteor';

export type RequestModel = {
  error?: boolean;
  success?: boolean;
  result: any;
  params?: any;
}

/**
 * Use Collection
 */
export function insertCollection(collection: any, params: any): Observable<RequestModel> {
  return from(new Promise((resolve, reject) => {
    collection.insert(params, (error, result) => {
      if (error) {
        reject({ error: true, result: { ...error }, params: { ...params } });
      }
      if (typeof result === 'string' || typeof result === 'number') {
        resolve({ success: true, result, params: {...params} });
      } else {
        resolve({ success: true, result: { ...result }, params: { ...params } });
      }
    });
  }));
}

export function removeCollection(collection: any, _id: string): Observable<RequestModel> {
  return from(new Promise((resolve, reject) => {
    collection.remove(_id, (error, result) => {
      if (error) {
        reject({ error: true, result: { ...error }, params: { _id } });
      }
      if (typeof result === 'string' || typeof result === 'number') {
        resolve({ success: true, result, params: { _id } });
      } else {
        resolve({ success: true, result: { ...result }, params: { _id } });
      }
    });
  }));
}

/**
 * Use call
 */
export function insertCall(methodName: string, params: any): Observable<RequestModel> {
  return from(new Promise((resolve, reject) => {
    Meteor.call(methodName, params, (error, result) => {
      if (error) {
        reject({ error: true, result: { ...error }, params: { ...params } });
      }
      if (typeof result === 'string' || typeof result === 'number') {
        resolve({ success: true, result, params: { ...params } });
      } else {
        resolve({ success: true, result: { ...result }, params: { ...params } });
      }
    });
  }));
}

export function removeCall(methodName: string, _id: string): Observable<RequestModel> {
  return from(new Promise((resolve, reject) => {
    Meteor.call(methodName, _id, (error, result) => {
      if (error) {
        reject({ error: true, result: { ...error }, params: { _id } });
      }
      if (typeof result === 'string' || typeof result === 'number') {
        resolve({ success: true, result, params: { _id } });
      } else {
        resolve({ success: true, result: { ...result }, params: { _id } });
      }
    });
  }));
}