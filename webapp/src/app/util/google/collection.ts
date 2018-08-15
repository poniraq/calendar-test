import { clone, remove } from 'lodash';

export interface Resource {
  id: number | string;
  deleted?: boolean;
}
export interface ResourceCollection<T extends Resource> {
  items: T[];
  nextSyncToken?: string;
}

export function sync<T extends Resource>(collection: Collection<T>, updates: T[]) {
  for (const updateItem of updates) {
    const index = collection.findIndex(item => item.id === updateItem.id);

    if (updateItem.deleted) {
      remove(collection, (item: any) => item.id === updateItem.id);
    } else if (index !== -1) {
      collection[index] = updateItem;
    } else {
      collection.push(updateItem);
    }
  }

  return collection;
}

export function Collection<T extends Resource>(items: T[]): Collection<T> {
  const collection = clone(items) as Collection<T>;

  collection.sync = (updates: T[]) => sync(collection, updates);
  return collection;
}

interface Collection<T extends Resource> extends Array<T> {
  sync: (updates: T[]) => Collection<T>;
}
