import { MoviesList } from 'components/Movieslist/moviesList';
import SearchBar from 'components/Searchbar/searchBar';
import { GetMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/loader';
const Movies = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
        setLoading(true);
        setError(false);
        const responseData = await GetMovies(query);

        setResults(responseData.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getResult();
  }, [query, searchParams]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}

      <SearchBar onChangeQuery={updateQuery} />
      <MoviesList results={results} />
    </div>
  );
};
export default Movies;
