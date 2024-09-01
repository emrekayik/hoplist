import Dexie, { type EntityTable } from 'dexie';

interface User {
  id: number;
  name: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const db = new Dexie('HoplisDatabase') as Dexie & {
  profile: EntityTable<
    User,
    'id' // primary key "id" (for the typings only)
  >;
  todos: EntityTable<Todo, 'id'>;
};

// Schema declaration:
db.version(1).stores({
  profile: '++id, name', // primary key "id" (for the runtime!)
  todos: '++id, title, completed',
});

export type { User, Todo };
export { db };
