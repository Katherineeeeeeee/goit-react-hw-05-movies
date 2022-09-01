import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetailes } from '../../Api/api';
import s from './MovieDetails.module.css';

import MoviesDetailsItem from './MoviesDetailsItem';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetailes(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  const goBack = () => navigate(-1);

  return (
    <main>
      <h1>Movie details</h1>
      <MoviesDetailsItem movie={movie} />
      <button className={s.btn} onClick={goBack}>
        Go back
      </button>

      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
