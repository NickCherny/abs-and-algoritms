import {
  LinkedListNode,
  LinkedList,
  createLinkedList,
} from '../List';

export type Stack<T> = {
  push: (value: T) => void
  pop: () => T|null
  peek: () => T|null
  toArray: () => Array<T>
  isEmpty: () => boolean
}

export const createStack = <T>(): Stack<T> => {
  const store: LinkedList<T> = createLinkedList<T>();

  return {
    push(value: T) {
      store.append(value);
    },

    pop() {
      const last: LinkedListNode<T>|null = store.last();
      if (last) {
        store.remove(last.value);
      }

      return last ? last.value : null
    },

    peek() {
      const targetNode = store.last();
      return targetNode ? targetNode.value : null;
    },

    isEmpty() {
      return store.isEmpty();
    },

    toArray() {
      return store.toArray();
    }
  };
};

export default createStack;
