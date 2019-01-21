import {
  createQueue
} from './Queue';

describe('Queue', () => {
  test('numbers queue', () => {
    const numbersQ = createQueue<number>();


    expect(numbersQ.isEmpty()).toBe(true);

    numbersQ.enqueue(0);
    numbersQ.enqueue(1);
    numbersQ.enqueue(2);

    expect(numbersQ.isEmpty()).toBe(false);

    expect(numbersQ.denqueue()).toBe(0);
    expect(numbersQ.denqueue()).toBe(1);
    expect(numbersQ.denqueue()).toBe(3);
  });
});
