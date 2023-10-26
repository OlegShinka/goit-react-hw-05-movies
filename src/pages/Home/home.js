import { MoviesList } from 'components/Movieslist/moviesList';
import { GetPopMovies } from 'components/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [results, setResult] = useState([]);
  console.log(results);
  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetPopMovies();

        setResult([responseData.results]);
        //
      } catch (error) {}
    }

    getResult();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <MoviesList results={results} />
    </div>
  );
}
