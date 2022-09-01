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
              width={'500px'}
            />
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
