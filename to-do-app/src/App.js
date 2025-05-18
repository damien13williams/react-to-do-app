import './App.css';
import { useState } from 'react'
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

function App() {

  let [todos, setTodos] = useState([
    { id: 0, task: "Play Games", status: "Active"},
    { id: 1, task: "Homework", status: "Completed"},
    { id: 2, task: "Clean", status: "Active"}
  ])


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (data) => {
    setTodos([ ...todos, data= { ...data, id: parseInt(todos[todos.length-1].id) + 1, status:"Active"}]) 
    console.log(data)
  }
  return (
    <div className="todo-container">
      <TodoSearch add_todo = { addTodo } />
      <TodoFilter />
      <TodoList todos = { todos } delete_todo = { deleteTodo } />
    </div>
  )
}

export default App;
