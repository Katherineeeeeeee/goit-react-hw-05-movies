import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import s from './List.module.css';

export default function ListItem({ movies }) {
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
            />
            <Link to={`/movies/${movie.id}`}>
              <span className={s.title}>{movie.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

ListItem.propTypes = {
  movies: PropTypes.array,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};