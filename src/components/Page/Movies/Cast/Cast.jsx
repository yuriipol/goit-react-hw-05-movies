import style from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { getSerchDetailsMovieActors } from '../../../Servises/MoviesAPI';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      const data = await getSerchDetailsMovieActors(movieId).then(
        data => data.cast
      );
      console.log(data);
      setActors(data);
    };
    if (movieId) {
      fetchActors();
    }
  }, [movieId]);

  const actorsList = actors.map(({ id, profile_path, name, character }) => (
    <li key={id}>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <h3>{name}</h3>
      <h3>Character: {character}</h3>
    </li>
  ));
  return (
    <div className={style.container}>
      <h2>Актеры:</h2>
      <ul>{actorsList}</ul>
    </div>
  );
};

export default Cast;
