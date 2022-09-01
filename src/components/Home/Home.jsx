import { useState, useEffect } from 'react';

import { getPopularMovies } from '../../Api/api';

import ListItem from '../List/ListItem';

export default function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return <ListItem movies={movies} />;
}
