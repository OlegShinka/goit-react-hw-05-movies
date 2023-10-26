import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/home';
import Movies from 'pages/Movies/movies';
import SharedLayuot from './SharedLayout/sharedlayout';
import MovieDetails from 'pages/MovieDetails/movieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
