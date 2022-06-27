import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoAddButton } from './components/TodoAddButton';
import './App.css';

const todoList = [
  { text: 'Ver video curso React', completed: true },
  { text: 'Estudiar Fep', completed: false },
  { text: 'Terminar proyecto Taller BD', completed: false }
]

const completedTodo = todoList.reduce((total, todo) => (true === todo.completed ? total + 1: total), 0);

function App() {
  return (
    <React.Fragment>
      <TodoHeader completedCount={ completedTodo } totalCount={ todoList.length }></TodoHeader>
      <div id='header-container'>
        <TodoSearch></TodoSearch>
        <TodoAddButton></TodoAddButton>
      </div>
      <TodoList list={ todoList }></TodoList>
    </React.Fragment>
  );
}

export default App;
