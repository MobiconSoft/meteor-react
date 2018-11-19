
import { from, Observable } from 'rxjs';

export function insertCollection(collection: any, params: any): Observable<any> {
  return from(new Promise((resolve, reject) => {
    collection.insert(params, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }));
}

export function removeCollection(collection: any, _id: string): Observable<any> {
  return from(new Promise((resolve, reject) => {
    collection.remove(_id, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }));
}