import { GetCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/loader';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getResult() {
      try {
        setLoading(true);
        setError(false);
        const responseData = await GetCast(movieId);
        setCast(responseData.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getResult();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p> Reload page please ...</p>}
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            {item.name}
            <img
              src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
