import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from 'modules/Navigation/Navigation';

import Home from '../views/Home';
import Movies from '../views/Movies';
import NotFound from '../views/NotFound';

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
