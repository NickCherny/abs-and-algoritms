import {
  createStack,
} from './Stack';

describe('Stack', () => {
  test('String stack', () => {
    const stStack = createStack<string>();

    expect(stStack.isEmpty()).toBe(true);
    stStack.push('A');
    stStack.push('B');
    stStack.push('C');
    expect(stStack.isEmpty()).toBe(false);
    expect(stStack.pop()).toBe('C');
    expect(stStack.pop()).toBe('B');
    expect(stStack.pop()).toBe('A');
  });
});
