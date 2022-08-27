import style from './Movies.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

import { getSerchMovies } from '../../Servises/MoviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [nameMovie, setNameMovie] = useState('');

  //   console.log(nameMovie);

  const onSubmit = nameMovie => {
    setNameMovie(nameMovie);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getSerchMovies(nameMovie).then(data => data.results);
      //   console.log(data);
      setMovies([...data]);
    };
    if (nameMovie) {
      fetchMovies();
    }
  }, [nameMovie]);

  const moviesItem = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <>
      <NavLink to="/">
        <button type="button" className={style.buttonGoBack}>
          Go back
        </button>
      </NavLink>
      <Search onSubmit={onSubmit} />

      <ul>{moviesItem}</ul>
    </>
  );
};

export default Movies;
