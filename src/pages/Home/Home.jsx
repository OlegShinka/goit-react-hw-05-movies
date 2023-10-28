import { MoviesList } from 'components/Movieslist/moviesList';
import { GetPopMovies } from 'components/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetPopMovies();

        setResult(responseData.results);
        //
      } catch (error) {}
    }

    getResult();
  }, []);

  return (
    <div>
      <MoviesList results={results} />
    </div>
  );
};
export default Home;
