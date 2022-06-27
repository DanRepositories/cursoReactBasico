import { TodoItem } from "./TodoItem";
import './components.css';

function TodoList(props) {
  return (
    <ul className="todo-list">
      {
        props.list.map((todo, index) => <TodoItem key={ index } texto={ todo.text } completed={ todo.completed } />)
      }
    </ul>
  );
}

export { TodoList };
