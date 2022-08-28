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
      // console.log(data);
      setActors(data);
    };
    if (movieId) {
      fetchActors();
    }
  }, [movieId]);

  const actorsList = actors.map(({ id, profile_path, name, character }) => (
    <li key={id} className={style.actorItem}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
        }
        alt={name}
        className={style.imgActor}
      />
      <h3 className={style.title}>{name}</h3>
      <h3 className={style.character}>Character: {character}</h3>
    </li>
  ));
  return (
    <div className={style.container}>
      <h2>Actors:</h2>
      <ul className={style.actorsList}>{actorsList}</ul>
    </div>
  );
};

export default Cast;
