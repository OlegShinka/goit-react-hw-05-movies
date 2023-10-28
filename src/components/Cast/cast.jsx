import { GetCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setCast] = useState([]);
  // const[profile, setProfile] = useState('')
  console.log('CAST:', cast);
  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetCast(movieId);
        setCast(responseData.cast);
      } catch (error) {}
    }
    getResult();
  }, [movieId]);

  return (
    <div>
      All cast
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
