import { TaskManager, createTaskManager } from './taskManager';

describe('Decision with Stack', () => {
  test('Tasks Manager ', () => {
    const tasksManager: TaskManager<() => number> = createTaskManager(5);
    const values = [0, 1, 2, 3, 4, 5, 6];
    expect(tasksManager.isEmpty()).toBe(true);
    values.forEach(item => tasksManager.add(() => item));
    expect(tasksManager.isEmpty()).toBe(false);
    values.forEach((item) => {
      const task = tasksManager.pop();
      if (task) {
        expect(task()).toBe(item);
      }
    })
  });
});
