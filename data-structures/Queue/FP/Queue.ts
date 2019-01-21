import {
  LinkedList,
  createLinkedList,
} from '../../List';

export type Queue<T> = {
  enqueue: (value: T) => void
  denqueue: () => T|null
  isEmpty: () => boolean
}

export const createQueue = <T>(): Queue<T> => {
  const store: LinkedList<T> = createLinkedList<T>();

  return {
    enqueue(value: T) {
      store.append(value);
    },
    denqueue() {
      const first = store.first();
      if (first) {
        const { value } = first;
        store.remove(value);

        return value;
      }

      return null;
    },

    isEmpty() {
      return store.isEmpty();
    }
  }
}

export default createQueue;
