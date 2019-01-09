export interface IQueue<T> {
  push: (value: T) => void;
  pop: () => T;
  count: () => number;
  isEmpty: () => boolean
}

class Queue<T> implements IQueue<T> {
  private container: Array<T> = [];
  private head = 0;

  push(value: T): void {
    this.container.push(value);
  }

  pop() {
    const element = this.container[this.head];
    this.head += 1;

    if (this.head > this.count()) {
      this.head = 0;
    }

    return element;
  }

  count() {
    return this.container.length;
  }

  isEmpty() {
    return Boolean(this.container.length);
  }
}

export default Queue;
