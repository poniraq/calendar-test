import { Observable, timer } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { Collection, ResourceCollection, Resource } from './collection';

export interface WatchableConfig {
  syncToken?: string;
}
export type WatchableMethod
<T extends ResourceCollection<M>, M extends Resource>
= (...args: any[]) => Observable<T>;

export interface WatchConfig {
  interval?: number;
  [params: string]: any;
}
// export type WatchMethod
// <T extends ResourceCollection<M>, M extends Resource>
// = (interval?: number, ...args: any[]) => Observable<T>;



export function watch
<T extends ResourceCollection<M>, M extends Resource>
(method: WatchableMethod<T, M>, context: any, interval: number = 5000, ...args: any[]) {
  let collection = Collection<M>([]);
  let syncToken: string;

  return timer(0, interval).pipe(
    flatMap(() => method.call(context, ...args, { syncToken: syncToken })),
    filter((list: T) => list.items.length > 0),
    map((list: T) => {
      syncToken = list.nextSyncToken;
      collection = collection.sync(list.items);
      list.items = collection;

      return list;
    })
  );
}
