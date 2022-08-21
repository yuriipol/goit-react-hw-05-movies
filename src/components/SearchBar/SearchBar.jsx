import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import style from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const hendleNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const hanedleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast('Input image name');
      return;
    }

    onSubmit(imageName);

    setImageName('');
  };
  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={hanedleSubmit}>
        <button type="submit" className={style.button}>
          <ImSearch />
        </button>

        <input
          className={style.input}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={hendleNameChange}
        />
      </form>
    </header>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
