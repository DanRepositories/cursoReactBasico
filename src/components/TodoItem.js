import React from "react";
import './components.css';

function TodoItem(props) {
  const classText = `${ props.completed && "todo-ready"}`;

  return (
    <li className="todo-item">
      <span className="clickable-item">Ready</span>
      <span className={ classText }>{ props.texto }</span>
      <span className="clickable-item">X</span>
    </li>
  );
}

export { TodoItem };
