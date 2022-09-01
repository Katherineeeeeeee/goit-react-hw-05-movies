import { Routes, Route } from 'react-router-dom';

import HomePage from './views/HomePage';
import Movies from './views/Movies';
import MoviesDetails from './views/MovieDetails';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFound from './views/NotFound';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
