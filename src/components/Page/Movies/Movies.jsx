import style from './Movies.module.css';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

import { getSerchMovies } from '../../Servises/MoviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [nameMovie, setNameMovie] = useState('');
  const [nameMovie, setNameMovie] = useSearchParams();
  const query = nameMovie.get('query') ?? '';
  const location = useLocation();

  const nameMovieRef = useRef(query);

  // console.log(movies);

  const onSubmit = nameMovie => {
    setNameMovie({ query: nameMovie });
    setPage(1);
  };
  const onClickLoadVore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const isNewSearch = query !== nameMovieRef.current;
      if (!query || (!isNewSearch && page === 1)) {
        return;
      }
      try {
        const data = await getSerchMovies(query, page).then(
          data => data.results
        );
        if (isNewSearch) {
          // setPage(1);
          nameMovieRef.current = query;
          // setImages([...data]);
          // setStatus('resolved');
          // return;
        }
        //   console.log(data);
        setMovies(prevMovies => {
          const movies = isNewSearch ? [] : prevMovies;
          return [...movies, ...data];
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query, page]);

  const moviesItem = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={style.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
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
      <NavLink to="/" className={style.buttonGoBack}>
        Go back
      </NavLink>
      <Search onSubmit={onSubmit} />

      <ul className={style.movieList}>{moviesItem}</ul>
      {movies.length > 0 && (
        <button
          type="button"
          className={style.loadMore}
          onClick={onClickLoadVore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Movies;
