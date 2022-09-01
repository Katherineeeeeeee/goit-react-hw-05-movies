import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../Api/api';

import CastItem from './CastItem';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(result => {
        setCast(result.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <h2>Cast</h2>
      <CastItem cast={cast} />
    </>
  );
}
