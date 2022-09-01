import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import MoviesDetails from './views/MovieDetails/MovieDetails';
import Cast from './views/Cast/Cast';
import Reviews from './views/Reviews/Reviews';
import NotFound from './views/NotFound';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
