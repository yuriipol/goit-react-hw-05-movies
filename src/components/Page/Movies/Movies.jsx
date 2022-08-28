import style from './Movies.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

import { getSerchMovies } from '../../Servises/MoviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [nameMovie, setNameMovie] = useState('');

  console.log(movies);

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

  const moviesItem = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={style.item}>
      <Link to={`/movies/${id}`}>
        <img
          className={style.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
          }
          alt={title}
        />
        {/* <div className={style.descr}>{title}</div> */}
      </Link>
    </li>
  ));
  return (
    <>
      <NavLink to="/">
        {movies.length !== 0 && (
          <button type="button" className={style.buttonGoBack}>
            Go back
          </button>
        )}
      </NavLink>
      <Search onSubmit={onSubmit} />

      <ul className={style.movieList}>{moviesItem}</ul>
    </>
  );
};

export default Movies;
