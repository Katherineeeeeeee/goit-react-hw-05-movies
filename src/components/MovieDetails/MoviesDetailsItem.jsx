import s from './MovieDetails.module.css';
import Btn from 'components/Btn/Btn';

export default function MoviesDetailsItem({ movie }) {
  return (
    movie && (
      <div className={s.wrap}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          width={'500px'}
        />

        <div className={s.desc}>
          <h2 className={s.title}>{movie.original_title}</h2>
          <h3 className={s.scores}>Users Scores: {movie.popularity}%</h3>
          <h3 className={s.overview}>Overview</h3>
          <p className={s.overview}>{movie.overview}</p>
          <h3 className={s.genres}>Genres</h3>
          <p className={s.genre}>
            {movie.genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </p>
          <Btn text="Go back" />
        </div>
      </div>
    )
  );
}
