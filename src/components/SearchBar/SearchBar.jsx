import { Component } from 'react';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    imageName: '',
  };
  hendleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  hanedleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.imageName);

    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form}>
          <button type="submit" className={style.button}>
            <span className={style.button__label}>Search</span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
