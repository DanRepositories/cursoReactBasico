import React from 'react';
import './components.css';

function TodoSearch({searchText, setSearchText}) {

  const onChangeText = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

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
