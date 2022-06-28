import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoAddButton } from './components/TodoAddButton';
import './App.css';

const defaultTodoList = [
  { text: 'Ver video curso React', completed: true },
  { text: 'Estudiar Fep', completed: false },
  { text: 'Terminar proyecto Taller BD', completed: false }
]

function filterTodoList(todoList, filterText) {
  let filteredList = todoList;
  const textToFilterInLowerCase = filterText.trim().toLowerCase()

  if (filterText.length > 0)
    filteredList = filteredList.filter(todo => todo.text.toLowerCase().includes(textToFilterInLowerCase));

  return filteredList;
}

function App() {
  const [todoList, setTodoList] = React.useState(defaultTodoList);
  const [searchText, setSearchText] = React.useState('');

  const filteredList = filterTodoList(todoList, searchText);
  const completedTodo = todoList.reduce((total, todo) => (true === todo.completed ? total + 1: total), 0);

  return (
    <React.Fragment>
      <TodoHeader
        completedCount={ completedTodo }
        totalCount={ todoList.length }
      />
      <div id='header-container'>
        <TodoSearch
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <TodoAddButton />
      </div>
      <TodoList list={ filteredList } />
    </React.Fragment>
  );
}

export default App;
