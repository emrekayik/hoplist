'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Todo, db } from '@/utils/db';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Props {
  params: { id: string };
}

export default function TodosPage({ params }: Props) {
  const { id } = params;
  const [title, setTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await db.todos.get(Number(params.id));
      if (todo) setTitle(todo.title);
      await fetchTodo();
    };
  }, [params.id]);

  const saveTodo = async () => {
    await db.todos.put({ id: Number(params.id), title, completed: false });
    router.push('/app/todos');
  };
  return (
    <>
      <h1>Edit Todo</h1>
      <Input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='todo title'
      />
      <Button onClick={saveTodo}>Save Todo</Button>
    </>
  );
}
