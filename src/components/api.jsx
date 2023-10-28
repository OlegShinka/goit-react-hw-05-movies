import axios from 'axios';
//axios.default.baseURL=
export const GetPopMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=64951ac1864e1a2cf580c3f814e91024'
  );
  return response.data;
};

export const GetMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=64951ac1864e1a2cf580c3f814e91024`
  );
  return response.data;
};

export const GetMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=64951ac1864e1a2cf580c3f814e91024`
  );
  //console.log(response.data);
  return response.data;
};

export const GetCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=64951ac1864e1a2cf580c3f814e91024`
  );
  console.log(typeof response.data);
  console.log(response.data);
  return response.data;
};

export const GetReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=64951ac1864e1a2cf580c3f814e91024`
  );
  console.log(typeof response.data);
  console.log(response.data);
  return response.data;
};
