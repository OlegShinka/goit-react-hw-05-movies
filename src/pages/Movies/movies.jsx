import { MoviesList } from 'components/Movieslist/MoviesList';
import SearchBar from 'components/Searchbar/SearchBar';
import { GetMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);
  //const [queryString, setQueryString] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = query => {
    if (query.value === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: query.value });
    }
    // setQueryString(query.value);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    //відмина 1-го рендера сторінки по умові, якщо пустий рядок запиту
    if (query === '') {
      return;
    }

    async function getResult() {
      try {
        const responseData = await GetMovies(query);

        setResults(responseData.results);
      } catch (error) {}
    }

    getResult();
  }, [searchParams]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchBar onChangeQuery={updateQuery} />
      <MoviesList results={results} />
    </div>
  );
};
export default Movies;
