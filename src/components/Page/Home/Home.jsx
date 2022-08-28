import style from './Home.module.css';
import { getTrendingMovies } from '../../Servises/MoviesAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getTrendingMovies().then(data => data.results);
      // console.log(data);
      setMovies([...data]);
    };

    fetchTrendingMovies();
  }, []);
  const elementsMovies = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={style.item}>
      <Link to={`/movies/${id}`} id={id} className={style.link}>
        <img
          className={style.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
          }
          alt={title}
        />
        <div>
          <p className={style.title}>{title}</p>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className={style.container}>
      <ul className={style.movieList}>{elementsMovies}</ul>
    </div>
  );
};

export default Home;
