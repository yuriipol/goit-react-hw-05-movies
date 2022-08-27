import { useParams, Outlet } from 'react-router-dom';
import { getSerchDetailsMovie } from '../../Servises/MoviesAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  // console.log(movieId);
  // console.log(movieDetails);
  useEffect(() => {
    const fetchMoviesDetails = async () => {
      const data = await getSerchDetailsMovie(movieId);
      setMovieDetails({ ...data });
    };
    fetchMoviesDetails();
  }, [movieId]);

  const { backdrop_path, title, overview, genres, release_date, vote_average } =
    movieDetails;
  const userScore = ((100 * vote_average) / 10).toFixed(0);
  return (
    <div className={style.container}>
      <img
        src={`https://image.tmdb.org/t/p/w200${backdrop_path}`}
        alt={title}
      />
      <div>
        <h1>
          {title}({Number.parseInt(release_date)})
        </h1>
        <h2>Overview</h2>
        <p>Use score: {userScore}%</p>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres?.map(item => item.name + ' ')}</p>
      </div>
      <hr />

      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
