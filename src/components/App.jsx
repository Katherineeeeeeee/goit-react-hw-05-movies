import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import s from './App.module.css';

import Home from '../views/Home';
import Movies from '../views/Movies';
import MovieDetails from '../views/MovieDetails';
import NotFound from '../views/NotFound';

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/:movieId">Movie Details</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
