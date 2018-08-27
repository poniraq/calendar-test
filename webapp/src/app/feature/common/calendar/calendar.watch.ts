import { Observable, timer } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { IResource, IResourceList } from './calendar.types';
import { Collection } from './calendar.collection';

/**
 * Watchable mthod *should* accept `syncToken` as last argument
 * This kind of typing is not supported in Typescript
 */
export type WatchableMethod <T extends IResourceList<M>, M extends IResource> = (...args: any[] /*, syncToken: string*/) => Observable<T>;
export interface WatchableConfig {
  syncToken?: string;
}

export function Watch(interval = 10000): MethodDecorator {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    const originalMethod: any = descriptor.value;

    descriptor.value = function(...args: any[]) {
      return watch(originalMethod, this, interval, args);
    };
  };
}

function watch
<T extends IResourceList<M>, M extends IResource>
(method: WatchableMethod<T, M>, context: any, interval: number, ...args: any[]) {
  let collection: Collection<M>;
  let syncToken: string;

  return timer(0, interval).pipe(
    // call original watchable method, pass syncToken
    flatMap(() => method.call(context, ...args, syncToken)),

    // don't do anything unless there are updates
    filter((list: T) => list && list.items.length > 0),

    // save token, sync collection items
    map((list: T) => {
      syncToken = list.nextSyncToken;

      if (!collection) {
        list.items = collection = Collection.create(list.items);
      } else {
        list.items = collection.sync(list.items);
      }

      return list;
    })
  );
}
