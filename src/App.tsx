import 'normalize.css'
import Layout from './components/Layout';
import {useState} from 'react';
type Todo = {
  name: string;
  complete: boolean;
  createdAt: Date;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log('todos', todos);
  
  return (
    <Layout>
      Daily To Do List
    </Layout>
  )
}