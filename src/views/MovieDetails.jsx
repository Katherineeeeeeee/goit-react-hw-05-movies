import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetailes } from '../Api/api';

import MoviesDetailsItem from '../components/MovieDetails/MoviesDetailsItem';
import s from '../components/MovieDetails/MovieDetails.module.css';

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
      <MoviesDetailsItem movie={movie} />

      <h2 className={s.additionalTitle}>Additional information</h2>
      <ul className={s.list}>
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

MoviesDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      popularity: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    })
  ),
};
