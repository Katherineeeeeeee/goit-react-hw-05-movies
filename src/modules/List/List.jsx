import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../Api/api';

export default function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
