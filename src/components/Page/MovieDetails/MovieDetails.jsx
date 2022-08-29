import { useParams, Outlet } from 'react-router-dom';
import { getSerchDetailsMovie } from '../../Servises/MoviesAPI';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backLinkHref = location.state?.from ?? '/movies';
  // console.log(movieId);
  // console.log(movieDetails);
  useEffect(() => {
    const fetchMoviesDetails = async () => {
      const data = await getSerchDetailsMovie(movieId);
      setMovieDetails({ ...data });
    };
    fetchMoviesDetails();
  }, [movieId]);

  const { poster_path, title, overview, genres, release_date, vote_average } =
    movieDetails;
  const userScore = ((100 * vote_average) / 10).toFixed(0);
  return (
    <div className={style.container}>
      <NavLink to={backLinkHref} className={style.buttonGoBack}>
        Go back
      </NavLink>
      <div className={style.movie}>
        <img
          className={style.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
          }
          alt={title}
        />
        <div className={style.discription}>
          <h1 className={style.title}>
            {title}({Number.parseInt(release_date)})
          </h1>
          <p className={style.use}>Use score: {userScore}%</p>
          <h2 className={style.overviews}>Overview</h2>

          <p className={style.overviewsText}>{overview}</p>
          <h2 className={style.genres}>Genres</h2>
          <p className={style.genresText}>
            {genres?.map(item => item.name + ' ')}
          </p>
        </div>
      </div>
      <hr />

      <h2 className={style.additional}>Additional information</h2>

      <NavLink
        to="cast"
        className={({ isActive }) =>
          isActive ? `${style.active} ${style.startLink}` : `${style.startLink}`
        }
      >
        Cast
      </NavLink>
      <NavLink to="reviews" className="startLink">
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
