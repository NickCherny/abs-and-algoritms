import Queue from './index';

const task1 = () => console.log('done task 1');
const task2 = () => console.log('done task 2');
const task3 = () => console.log('done task 3');

const tasksQueue = new Queue<Function>();

tasksQueue.push(task1);
tasksQueue.push(task2);
tasksQueue.push(task3);

tasksQueue.pop()();
tasksQueue.pop()();
tasksQueue.pop()();
