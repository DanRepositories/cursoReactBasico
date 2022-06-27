import './components.css';

function TodoSearch() {
  const onChangeText = (event) => {
    console.log(event.target.value)
  };

  return (
    <input
      className='search-bar'
      placeholder="Nueva Nota"
      onChange={onChangeText}
    />
  );
}

export { TodoSearch };
