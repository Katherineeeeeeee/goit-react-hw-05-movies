import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearch } from '../Api/api';

import Searchbar from 'components/Searchbar/Searchbar';
import ListItem from '../components/List/ListItem';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (search?.trim() === '') {
      return alert('Try again');
    }
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      getSearch(search)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [search]);

  return (
    <>
      <Searchbar handleSubmit={handleSubmit} />
      {movies && <ListItem movies={movies} />}
    </>
  );
}

Movies.propTypes = {
  search: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
