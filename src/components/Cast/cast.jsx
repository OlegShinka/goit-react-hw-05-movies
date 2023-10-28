import { GetCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams;
  console.log(movieId);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getResult() {
      try {
        const responseData = await GetCast(movieId);
        setCast(responseData.data.cast);
      } catch (error) {}
    }

    getResult();
    console.log('USEef');
  }, [movieId]);

  return <div>All cast {movieId}</div>;
};
export default Cast;
