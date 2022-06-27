import './components.css';

function TodoHeader(props) {
  return (
    <p className='header'>Has completado {props.completedCount} de {props.totalCount} TODO</p>
  );
}

export { TodoHeader };
