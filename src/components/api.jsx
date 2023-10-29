import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '64951ac1864e1a2cf580c3f814e91024';
const LANGUAGE = 'language=en-US';
export const GetPopMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const GetMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&${LANGUAGE}&page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const GetMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?${LANGUAGE}&api_key=${API_KEY}`
  );
  return response.data;
};

export const GetCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?${LANGUAGE}&api_key=${API_KEY}`
  );
  return response.data;
};

export const GetReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?${LANGUAGE}&api_key=${API_KEY}`
  );
  return response.data;
};
