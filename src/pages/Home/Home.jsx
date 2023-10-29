import { MoviesList } from 'components/Movieslist/moviesList';
import { GetPopMovies } from 'components/api';
import { Loader } from 'components/Loader/loader';
import { useEffect, useState } from 'react';

const Home = () => {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getResult() {
      try {
        setLoading(true);
        setError(false);
        const responseData = await GetPopMovies();

        setResult(responseData.results);
        //
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getResult();
  }, []);

  return (
    <div>
      <h2> Trending today</h2>
      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}
      <MoviesList results={results} />
    </div>
  );
};
export default Home;
