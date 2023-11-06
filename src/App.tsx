import { useState } from 'react';

import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import Todo from './components/Data';
import TodoElem from './components/TodoElem';
import TodoList from './components/TodoList';
import 'normalize.css'


export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log('todos', todos);

  const createTodo = (name: string) => {
    console.log("create a new todo with name=", name);
    const newTodo = {
      id: Date.now(),
      name: name,
      complete: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  }

  const completeTodo = (id: number) => {
    console.log(id);
    const index = todos.findIndex(todo => todo.id == id);
    if (index == -1) return;
    
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <Layout>
      <TodoForm onSubmit={createTodo} />
      <TodoList elems={todos} check={completeTodo} />
    </Layout>
  )
}
