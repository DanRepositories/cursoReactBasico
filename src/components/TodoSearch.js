import React from 'react';
import './components.css';

function TodoSearch() {
  const [searchText, setSearchText] = React.useState('');

  const onChangeText = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  console.log(searchText);

  return (
    <input
      className='search-bar'
      placeholder="Nueva Nota"
      value={searchText}
      onChange={onChangeText}
    />
  );
}

export { TodoSearch };
