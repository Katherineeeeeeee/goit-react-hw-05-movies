export default function MoviesDetailsItem({ movie }) {
  return (
    movie && (
      <>
        <h2>{movie.original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          width={'400px'}
        />
        <p>Users Scores: {movie.popularity}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </p>
      </>
    )
  );
}
