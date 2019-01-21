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
      const targetElement = store.deleteHead();

      return targetElement ? targetElement.value : null;
    },

    isEmpty() {
      return store.isEmpty();
    }
  }
}

export default createQueue;
