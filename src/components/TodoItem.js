import React from "react";
import './components.css';

function TodoItem(props) {
  const classText = `${ props.completed && "todo-ready"}`;

  const onComplete = () => {
    console.log('Todo completado: ', props.texto );
  };

  const onDelete = () => {
    console.log('Todo Borrado: ', props.texto);
  };

  return (
    <li className="todo-item">
      <span
        className="clickable-item"
        onClick={onComplete}
      >
        Ready
      </span>
      <span
        className={classText}
      >
        { props.texto }
      </span>
      <span
        className="clickable-item"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
