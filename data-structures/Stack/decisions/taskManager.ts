import {
  Stack,
  createStack
} from '../Stack';

export type TaskManager<T> = {
  limit(): number
  reciveLimit(newLimit: number): void
  add: (element: T) => void
  pop(): T|null
  isEmpty(): boolean
}

export const createTaskManager = <T>(limit: number): TaskManager<T> => {
  let tasks: Array<Stack<T>> = [];

  return {
    limit() {
      return limit;
    },

    reciveLimit(newLimit: number) {
      limit = newLimit;
    },

    add(task: T) {
      if (tasks.length === 0) {
        const st = createStack<T>();
        st.push(task);
        tasks.push(st);
      } else {
        const lastTasksStackIndex = tasks.length;
        if (tasks[lastTasksStackIndex].toArray().length < limit) {
          tasks[lastTasksStackIndex].push(task);
        } else {
          const st = createStack<T>();
          st.push(task);
          tasks.push(st);
        }
      }
    },

    pop() {
      if (tasks.length !== 0) {
        const targetStack = tasks[tasks.length - 1];
        const task = targetStack.pop();
        tasks = tasks.filter(stack => !stack.isEmpty());
        return task;
      }
      return null;
    },

    isEmpty() {
      return Boolean(tasks.length);
    }
  }
}

export default createTaskManager;
