import Queue from './index';

describe('Queue', () => {
  test('Queue', () => {
    const numbers = new Queue<Number>();
    numbers.push(1);
    numbers.push(2);
    numbers.push(3);
    numbers.push(4);

    expect(numbers.pop()).toBe(1);
    expect(numbers.pop()).toBe(2);
    expect(numbers.pop()).toBe(3);
    expect(numbers.pop()).toBe(4);
  });
});
