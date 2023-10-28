import { GetCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setCast] = useState([]);
  console.log('CAST:', cast);
  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetCast(movieId);
        setCast(responseData.data.cast);
      } catch (error) {}
    }

    getResult();
    //console.log('CAST:', cast);
    console.log('USEeffect');
  }, [movieId]);

  return (
    <div>
      All cast
      <ul>
        {cast.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
