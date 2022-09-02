import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Api/api';
import ReviewsItem from '../components/Reviews/ReviewsItem';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(result => {
        setReviews(result.results);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);
  return (
    <>
      <h2>Reviews</h2>
      {reviews && <ReviewsItem reviews={reviews} />}
    </>
  );
}
