import style from './Search.module.css';

import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

function Search({ onSubmit }) {
  const [nameMovie, setNameMovie] = useState('');

  const hendleNameChange = event => {
    setNameMovie(event.currentTarget.value.toLowerCase());
  };

  const hanedleSubmit = event => {
    event.preventDefault();

    if (nameMovie.trim() === '') {
      alert('Input image name');
      return;
    }
    onSubmit(nameMovie);

    setNameMovie('');
  };

  return (
    <form className={style.form} onSubmit={hanedleSubmit}>
      <input
        className={style.input}
        type="text"
        name="nameMovie"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={nameMovie}
        onChange={hendleNameChange}
      />
      <button type="submit" className={style.button}>
        <ImSearch /> Search
      </button>
    </form>
  );
}
export default Search;
