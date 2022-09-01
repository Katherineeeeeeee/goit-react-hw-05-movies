// import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearch } from '../../Api/api';
import ListItem from '../../modules/List/ListItem';

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
    // console.log(form.element.search.value);
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
      <form onSubmit={handleSubmit}>
        <label>
          <button type="submit">🔍</button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="search"
          />
        </label>
      </form>
      {movies && <ListItem movies={movies} />}
    </>
  );
}
