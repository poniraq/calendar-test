import { IResource } from './calendar.types';

export class Collection<T extends IResource> extends Array<T> {
  static create<T extends IResource>(items?: T[]): Collection<T> {
    const instance: Collection<T> = Object.create(Collection.prototype);

    instance.splice(0, 0, ...items);
    return instance;
  }
  private constructor(items: T[]) {
    super(...items);
  }

  sync(updates: T[]) {
    for (const updateItem of updates) {
      const index = this.findIndex(item => item.id === updateItem.id);

      if (updateItem.deleted) {
        this.splice(index, 1);
      } else if (index !== -1) {
        this[index] = updateItem;
      } else {
        this.push(updateItem);
      }
    }

    return this;
  }
}
