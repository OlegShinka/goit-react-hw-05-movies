import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
//import Home from 'pages/Home/Home';
//import Movies from 'pages/Movies/Movies';
//import MovieDetails from 'pages/MovieDetails/MovieDetails';

import SharedLayuot from './SharedLayout/Sharedlayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/movieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};