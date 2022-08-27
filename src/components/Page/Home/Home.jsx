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
  const elementsMovies = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} id={id}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div className={style.container}>
      <ul>{elementsMovies}</ul>
    </div>
  );
};

export default Home;
