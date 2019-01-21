export type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T>|null;
  previous: LinkedListNode<T>|null;
};

type Node<T> = LinkedListNode<T>;

export const createLinkedListNode = <T>(value: T): Node<T> => {
  let next: Node<T>|null = null;
  let previous: Node<T>|null = null;

  return {
    value,
    next,
    previous,
  }
};

export type LinkedList<T> = {
  head: Node<T>|null
  isEmpty: () => boolean
  first: () => Node<T>|null
  last: () => Node<T>|null
  length: () => number
  find: (value: T) => Node<T>|null
  append: (value: T) => void
  insert: (before: Node<T>, value: T) => void
  remove: (value: T) => Node<T>|null
};

export const createLinkedList = <T>(): LinkedList<T> => {
  let head: Node<T>|null = null;
  let length = 0;

  return {
    head,
    isEmpty() {
      return !Boolean(head);
    },
    first() {
      return head;
    },
    last() {
      let tmp = head;
      if (tmp) {
        if (tmp.previous) {
          tmp = tmp.previous;
        } else {
          while(tmp.next) {
            tmp = tmp.next;
          }
        }
      }
      return tmp;
    },
    append(value: T) {
      const newNode = createLinkedListNode(value);
      const lastNode = this.last();

      if (lastNode) {
        lastNode.next = newNode;
        newNode.previous = lastNode;
      } else {
        head = newNode;
      }
      length += 1;
    },
    length() {
      return length;
    },

    find(value: T) {
      let tmp = head;
      while (tmp && tmp.value !== value) {
        tmp = tmp.next;
      }

      return !!tmp && tmp.value === value ? tmp : null;
    },
    insert(before: Node<T>, value: T) {
      const newNode = createLinkedListNode(value);
      const tmp = before.next;

      newNode.previous = before;
      before.next = newNode;
      newNode.next = tmp;
    },
    remove(value: T) {
      const targetNode: Node<T>|null = this.find(value);
      if (targetNode) {
        const { previous, next } = targetNode;
        if (!previous && next) {
          next.previous = null;
        } else if (previous && !next) {
          previous.next = null
        } else if (previous && next) {
          previous.next = next;
          next.previous = previous;
        }
      }
      return targetNode;
    }
  };
}
