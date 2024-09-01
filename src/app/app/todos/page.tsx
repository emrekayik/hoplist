'use client';

import { Button } from '@/components/ui/button';
import { Todo, db } from '@/utils/db';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const allTodos = await db.todos.toArray();
      setTodos(allTodos);
    };

    fetchTodos();
  }, []);
  return (
    <>
      <h1>Todos</h1>
      <Link href={`/app/todos/${Math.random().toString(36).substring(7)}`}>
        <Button>Add Todo</Button>
      </Link>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link href={`/app/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
