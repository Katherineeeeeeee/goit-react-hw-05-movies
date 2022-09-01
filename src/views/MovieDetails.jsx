import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetailes } from '../Api/api';
// import s from '../components/MovieDetails/MovieDetails.module.css';

import MoviesDetailsItem from '../components/MovieDetails/MoviesDetailsItem';
import Btn from 'components/Btn/Btn';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetailes(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <main>
      <h1>Movie details</h1>
      <MoviesDetailsItem movie={movie} />
      <Btn text="Go back" />

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
