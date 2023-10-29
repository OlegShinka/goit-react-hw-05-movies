import { MoviesList } from 'components/Movieslist/moviesList';
import SearchBar from 'components/Searchbar/searchBar';
import { GetMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQuery = query => {
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: query.value });
  };

  useEffect(() => {
    //відмина 1-го рендера сторінки по умові, якщо пустий рядок запиту
    if (!query) {
      return;
    }

    async function getResult() {
      try {
        const responseData = await GetMovies(query);

        setResults(responseData.results);
      } catch (error) {}
    }

    getResult();
  }, [query, searchParams]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchBar onChangeQuery={updateQuery} />
      <MoviesList results={results} />
    </div>
  );
};
export default Movies;
