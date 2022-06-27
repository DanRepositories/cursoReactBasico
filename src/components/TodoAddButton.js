import './components.css';

function TodoAddButton() {
  const onClickButton = (msg) => {
    console.log(msg)
  };

  return (
    <button
      className='add-button'
      onClick={() => onClickButton('Has hecho click')}
    >+</button>
  );
}

export { TodoAddButton };
