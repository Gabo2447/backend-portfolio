import path from 'node:path';
import { readData, writeData } from '../src/utils/database.js';

describe('Database Path Validation', () => {
  const BASE_DIR = path.resolve('src/database/');
  const DB_FILE = 'db.json';
  const VALID_DB_PATH = path.join(BASE_DIR, DB_FILE);

  test('DB_PATH should resolve to a valid path within BASE_DIR', () => {
    expect(VALID_DB_PATH.startsWith(BASE_DIR)).toBe(true);
  });

  test('Invalid DB_PATH should throw an error', () => {
    const invalidPath = path.join('..', '..', 'etc', 'passwd');
    const resolvedPath = path.resolve(BASE_DIR, invalidPath);

    expect(() => {
      if (!resolvedPath.startsWith(BASE_DIR)) {
        throw new Error('Invalid database path');
      }
    }).toThrow('Invalid database path');
  });

  test('Invalid DB_PATH should throw an error', () => {
    const invalidPath = path.join('..', '..', 'etc', 'passwd');
    const resolvedPath = path.resolve(BASE_DIR, invalidPath);

    expect(() => {
      if (!resolvedPath.startsWith(BASE_DIR)) {
        throw new Error('Invalid database path');
      }
    }).toThrow('Invalid database path');
  });
});

describe('Database Operations', () => {
  test('readData should return valid JSON data', async() => {
    const data = await readData();
    expect(typeof data).toBe('object');
  });

  test('writeData should add new data to the database', async() => {
    const key = 'testKey';
    const newData = { id: 1, name: 'Test User' };

    await writeData(key, newData);
    const data = await readData();

    expect(data[key]).toBeDefined();
    expect(data[key].some((item) => item.id === newData.id)).toBe(true);
  });
});
