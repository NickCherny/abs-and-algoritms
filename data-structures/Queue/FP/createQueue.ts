type QueueType<T> = {
  pop: () => T|null;
  push: (value: T) => void;
  count: () => number;
  isEmpty: () => boolean;
}

function createQueue<T>(): QueueType<T> {
}