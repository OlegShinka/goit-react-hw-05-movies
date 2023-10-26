import axios from 'axios';

export const GetPopMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=64951ac1864e1a2cf580c3f814e91024'
  );
  return response.data;
};

// export const GetMovies = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: '64951ac1864e1a2cf580c3f814e91024',
//     },
//   };

//   fetch(
//     'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1',
//     options
//   )
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };

export const GetMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=64951ac1864e1a2cf580c3f814e91024`
  );
  return response.data;
};
