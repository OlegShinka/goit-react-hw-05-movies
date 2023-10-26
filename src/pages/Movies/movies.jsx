import { MoviesList } from 'components/Movieslist/moviesList';
import SearchBar from 'components/Searchbar/searchBar';
import { GetMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [results, setResults] = useState([
    { id: 1, title: 'first' },
    { id: 2, title: 'second' },
    { id: 3, title: 'third' },
  ]);
  console.log('RESULTS', results);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  useEffect(() => {
    //відмина 1-го рендера сторінки по умові, якщо пустий рядок запиту
    if (query === '') {
      return;
    }

    async function getResult() {
      try {
        const responseData = await GetMovies(query);

        setResults([responseData.results]);
      } catch (error) {}
    }

    getResult();
  }, [query]);

  return (
    <div>
      <h2>Movies</h2>
      <SearchBar value={query} onChangeQuery={updateQuery} />
      <MoviesList results={results} />
    </div>
  );
}
