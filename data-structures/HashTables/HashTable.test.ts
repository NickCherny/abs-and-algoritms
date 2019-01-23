import {
  createHashTable
} from './HashTable';

type Book = {
  auth: string
  name: string
}

describe('HashTable', () => {
  test('Books', () => {
    const createHash = ({ auth, name }: { auth: string, name: string }) => `${auth}:${name}`;
    const booksStorage = createHashTable<Book>(createHash);
    const zombieKey = booksStorage.add({ auth: 'palanic', name: 'зомби' });

    expect(booksStorage.keys()[0]).toBe(zombieKey);
    expect(booksStorage.get(zombieKey)).toBeTruthy();
  });
});
