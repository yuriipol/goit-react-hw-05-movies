import style from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSerchDetailsMovieReviews } from '../../../Servises/MoviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getSerchDetailsMovieReviews(movieId).then(
        data => data.results
      );
      setReviews(data);
    };
    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);
  const reviewsList = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));
  return (
    <div className={style.container}>
      {reviews.length !== 0 ? <ul>{reviewsList}</ul> : <h2>No reviews</h2>}
    </div>
  );
};

export default Reviews;
